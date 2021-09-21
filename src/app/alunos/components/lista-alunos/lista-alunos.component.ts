import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { faEye, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Aluno } from '../../models/Aluno';
import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  alunos: Aluno[];

  faEye = faEye;
  faPen = faPen;
  faTrashAlt = faTrashAlt;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  visualizarAluno(aluno: Aluno): void {
    this.router.navigate(['alunos', aluno.id]);
  }

  editarAluno(aluno: Aluno): void {
    this.router.navigate(['alunos', 'editar', aluno.id]);
  }

  excluirAluno(aluno: Aluno): void {
    if (confirm(`Deseja realmente excluir o aluno: ${aluno.name}`)) {
      this.alunoService.excluirAluno(aluno).subscribe(() => {
        this.alunoService.getAlunos().subscribe((alunos) => {
          this.alunos = alunos;
        });
        alert('Aluno excluído com sucesso!');
      });
    }
  }
}
