import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoDetalheComponent } from './components/aluno-detalhe';
import { AlunoFormComponent } from './components/aluno-form';
import { ListaAlunosComponent } from './components/lista-alunos';

const routes: Routes = [
  { path: '', component: ListaAlunosComponent },
  { path: 'novo', component: AlunoFormComponent },
  { path: ':id', component: AlunoDetalheComponent },
  { path: 'editar/:id', component: AlunoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
