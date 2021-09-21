import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';
import { ListaCursosComponent } from './components/lista-cursos';

const routes: Routes = [
  { path: '', component: ListaCursosComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'naoEcontrado', component: CursoNaoEncontradoComponent },
  { path: 'editar/:id', component: CursoEditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
