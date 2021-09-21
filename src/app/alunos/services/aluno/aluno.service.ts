import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Aluno } from '../../models/Aluno';

@Injectable()
export class AlunoService {
  constructor() {}

  getAlunos(): Observable<Aluno[]> {
    return of([
      {
        id: 1,
        name: 'Danilo Rodrigues Teixeira',
        email: 'danilo@email.com.br',
      },
      { id: 2, name: 'Matheus Augusto', email: 'matheus@email.com.br' },
      { id: 3, name: 'José Rubens Veiga Neto', email: 'veiga@email.com.br' },
    ]).pipe(delay(1000));
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
      delay(1000)
    );
  }
}
