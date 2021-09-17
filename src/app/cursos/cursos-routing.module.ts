import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'naoEcontrado', component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
