import { Component, OnInit } from '@angular/core';

import { Aluno } from '../../models/Aluno';
import { AlunoService } from '../../services/aluno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit {
  id: number;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.loadParams();
    this.findAluno();
  }

  private findAluno(): void {
    this.alunoService.getAluno(this.id).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  private loadParams(): void {
    this.route.params.subscribe((params: any) => {
      this.id = Number(params.id);
    });
  }
}
