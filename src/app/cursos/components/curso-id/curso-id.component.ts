import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../../services/curso';


@Component({
  selector: 'app-curso-id',
  templateUrl: './curso-id.component.html',
  styleUrls: ['./curso-id.component.css'],
})
export class CursoIdComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursoService.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['/cursoNaoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
