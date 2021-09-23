import { Component, OnInit } from '@angular/core';

import { Aluno } from '../../models/Aluno';
import { AlunoService } from '../../services/aluno';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit {
  // alunos: Aluno[];
  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  // ngOnInit(): void {
  //   this.alunoService.getAlunos().subscribe((alunos) => {
  //     this.alunos = alunos;
  //   });
  // }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
