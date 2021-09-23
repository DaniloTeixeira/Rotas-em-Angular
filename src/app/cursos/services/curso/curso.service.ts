import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Curso } from '../../models/Curso';

@Injectable()
export class CursoService {
  cursos = [
    { id: 1, name: 'HTML 5' },
    { id: 2, name: 'CSS 3' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Typescript' },
    { id: 5, name: 'Angular' },
  ];

  constructor() {}

  getCursos(): Observable<Curso[]> {
    return of(this.cursos).pipe(delay(1000));
  }

  // getCurso(id: number): Observable<Curso> {
  //   return this.getCursos().pipe(
  //     map((cursos) => {
  //       const curso = cursos.find((curso) => curso.id === id);
  //       if (curso) {
  //         return curso;
  //       }
  //       throw new Error('Curso não encontrado');
  //     }),
  //     delay(1000)
  //   );
  // }

  getCurso(id: number) {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  excluirCurso(curso: Curso): Observable<void> {
    this.cursos = this.cursos.filter((c) => c !== curso);
    return of(undefined);
  }
}
