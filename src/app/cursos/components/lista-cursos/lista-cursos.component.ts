import { Component, OnInit } from '@angular/core';

import { Curso } from '../../models/Curso';
import { CursoService } from '../../services/curso';
import { faTrashAlt, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[];
  faTrashAlt = faTrashAlt;
  faEye = faEye;
  faPen = faPen;

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  visualizarCurso(curso: Curso): void {
    this.router.navigate(['cursos', curso.id]);
  }

  editarCurso(curso: Curso): void {
    this.router.navigate(['cursos', 'editar', curso.id]);
  }

  excluirCurso(curso: Curso): void {
    if (confirm(`Deseja realmente excluir o curso: ${curso.name}`)) {
      this.cursoService.excluirCurso(curso).subscribe(() => {
        this.cursoService.getCursos().subscribe((cursos) => {
          this.cursos = cursos;
        });
        alert('Curso excluído com sucesso!');
      });
    }
  }
}
