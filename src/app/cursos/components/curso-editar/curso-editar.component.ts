import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css'],
})
export class CursoEditarComponent implements OnInit {
  id: number;
  name: string;

  constructor(
    private router: Router,
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCurso();
  }

  private loadCurso(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.cursoService.getCurso(Number(id)).subscribe((curso) => {
        this.id = curso.id;
        this.name = curso.name;
      });
    });
  }
  // private loadCurso(): void {
  //   this.activatedRoute.params
  //     .pipe(
  //       take(1),
  //       switchMap(({ id }) => this.cursoService.getCurso(Number(id)))
  //     )
  //     .subscribe((curso) => {
  //       this.id = curso.id;
  //       this.name = curso.name;
  //     });
  // }

  goToList(): void {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['cursos'], );
  }

  editarCurso(): void {
    this.cursoService
      .editarCurso({
        id: this.id,
        name: this.name,
      })
      .subscribe(() => {
        alert('Registro alterado com sucesso!');
        this.goToList();
      });
  }
}
