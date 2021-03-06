import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Aluno } from '../../models/Aluno';

@Injectable()
export class AlunoService {
  alunos = [
    {
      id: 1,
      name: 'Danilo Rodrigues Teixeira',
      email: 'danilo@email.com.br',
    },
    {
      id: 2,
      name: 'Matheus Augusto',
      email: 'matheus@email.com.br',
    },
    {
      id: 3,
      name: 'José Rubens Veiga Neto',
      email: 'veiga@email.com.br',
    },
    {
      id: 4,
      name: 'Mariana Soares de Macedo Teixeira',
      email: 'mariana@email.com.br',
    },
    {
      id: 5,
      name: 'Walter Soares de Macedo Jr.',
      email: 'junior@email.com.br',
    },
  ];

  constructor() {}

  getAlunos(): Observable<Aluno[]> {
    return of(this.alunos).pipe(delay(1000));
  }

  getAluno(id: number): Observable<Aluno> {
    return this.getAlunos().pipe(
      map((alunos) => {
        const aluno = alunos.find((aluno) => aluno.id === id);
        if (aluno) {
          return aluno;
        }
        throw new Error('Aluno não encontrado');
      }),
      delay(500)
    );
  }

  excluirAluno(aluno: Aluno): Observable<void> {
    this.alunos = this.alunos.filter((c) => c !== aluno);
    return of(undefined);
  }

  editarAluno(aluno: Aluno): Observable<void> {
    const alunoEncontrado = this.alunos.find((a) => a.id === aluno.id);
    if (alunoEncontrado) {
      alunoEncontrado.name = aluno.name;
      alunoEncontrado.email = aluno.email;
    }
    return of(undefined);
  }
}
