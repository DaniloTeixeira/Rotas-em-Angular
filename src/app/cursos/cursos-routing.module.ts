import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { ListaCursosComponent } from './components/lista-cursos';

const routes: Routes = [
  { path: '', component: ListaCursosComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'editar/:id', component: CursoEditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule],
})
export class CursosRoutingModule {}
