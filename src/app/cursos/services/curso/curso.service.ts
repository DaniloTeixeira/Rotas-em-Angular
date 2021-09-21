import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Curso } from '../../models/Curso';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class CursoService {
  constructor() {}

  getCursos(): Observable<Curso[]> {
    return of([
      { id: 1, name: 'HTML 5' },
      { id: 2, name: 'CSS 3' },
      { id: 3, name: 'Javascript' },
      { id: 4, name: 'Typescript' },
      { id: 5, name: 'Angular' },
    ]).pipe(delay(1000));
  }

  getCurso(id: number): Observable<Curso> {
    return this.getCursos().pipe(
      map((cursos) => {
        const curso = cursos.find((curso) => curso.id === id);
        if (curso) {
          return curso;
        }
        throw new Error('Curso não encontrado');
      }),
      delay(1000)
    );
  }
}
