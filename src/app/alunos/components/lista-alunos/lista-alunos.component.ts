import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/Aluno';
import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }
}
