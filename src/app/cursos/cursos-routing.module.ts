import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';
import { ListaCursosComponent } from './components/lista-cursos';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'naoEcontrado', component: CursoNaoEncontradoComponent },
  { path: 'lista', component: ListaCursosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
