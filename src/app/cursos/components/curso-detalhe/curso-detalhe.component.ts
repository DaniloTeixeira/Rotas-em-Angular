import { Component, OnInit } from '@angular/core';

import { Curso } from '../../models/Curso';
import { CursoService } from '../../services/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id: number;
  curso: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.loadParams();
    this.findCurso();
  }

  private findCurso(): void {
    this.cursoService.getCurso(this.id).subscribe((curso) => {
      this.curso = curso;
    });
  }

  private loadParams(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
  }
}
