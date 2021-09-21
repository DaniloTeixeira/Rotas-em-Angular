import { Component, OnInit } from '@angular/core';

import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
  constructor(private alunosService: AlunoService) {}

  ngOnInit(): void {}
}
