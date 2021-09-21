import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/Curso';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    // this.cursos = this.cursoService.getCursos();
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }
}
