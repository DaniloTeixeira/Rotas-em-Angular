import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './components/aluno-detalhe';
import { AlunoFormComponent } from './components/aluno-form';
import { ListaAlunosComponent } from './components/lista-alunos';

const routes: Routes = [
  { path: '', component: ListaAlunosComponent },
  { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/:id', component: AlunoDetalheComponent },
  { path: 'alunos/:id/editar', component: AlunoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
