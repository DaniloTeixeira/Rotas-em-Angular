import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
  id: number;
  name: string;
  email: string;

  constructor(
    private router: Router,
    private alunoService: AlunoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAluno();
  }

  private loadAluno(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.alunoService.getAluno(Number(id)).subscribe((aluno) => {
        this.id = aluno.id;
        this.name = aluno.name;
        this.email = aluno.email;
      });
    });
  }

  // private loadAluno(): void {
  //   this.activatedRoute.params
  //     .pipe(
  //       take(1),
  //       switchMap(({ id }) => this.alunoService.getAluno(Number(id)))
  //     )
  //     .subscribe((aluno) => {
  //       this.id = aluno.id;
  //       this.name = aluno.name;
  //       this.email = aluno.email;
  //     });
  // }

  goToList(): void {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['alunos'], );
  }

  editarAluno(): void {
    this.alunoService
      .editarAluno({
        id: this.id,
        name: this.name,
        email: this.email,
      })
      .subscribe(() => {
        alert('Registro alterado com sucesso!');
        this.goToList();
      });
  }
}
