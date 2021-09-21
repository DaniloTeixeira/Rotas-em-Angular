import { Component, OnInit } from '@angular/core';

import { CursoService } from '../../services/curso';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../models/Curso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id: Curso;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOndDestroy() {
    this.inscricao.unsubscribe();
  }
}
