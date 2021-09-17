import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';

import { ListaAlunosComponent } from './components/lista-alunos';
import { AlunoFormComponent } from './components/aluno-form';
import { AlunoDetalheComponent } from './components/aluno-detalhe';

@NgModule({
  declarations: [
    ListaAlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent,
  ],
  imports: [CommonModule, AlunosRoutingModule],
})
export class AlunosModule {}
