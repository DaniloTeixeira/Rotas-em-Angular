import { Component, OnInit } from '@angular/core';

import { Curso } from '../../models/Curso';
import { CursoService } from '../../services/curso';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  // id: Curso;
  // descricao: Curso;
  curso: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) {}

  // ngOnInit(): void {
  //   this.inscricao = this.route.params.subscribe((params) => {
  //     this.id = params.id;
  //   });
  // }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.curso = this.cursoService.getCurso(id);
    });
  }

  ngOndDestroy() {
    this.inscricao.unsubscribe();
  }
}
