import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css'],
})
export class CursoEditarComponent implements OnInit {
  curso: any;
  inscricao: Subscription;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.curso = this.cursoService.getCurso(id);
      if (this.curso === null) {
        this.curso = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
