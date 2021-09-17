import { Component, OnInit } from '@angular/core';

import { CursoService } from '../../services/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  constructor(
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
