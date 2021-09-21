import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoService } from './services/curso';
import { CursoIdComponent } from './components/curso-id';
import { ListaCursosComponent } from './components/lista-cursos';
import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';

@NgModule({
  declarations: [
    CursoIdComponent,
    ListaCursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursoEditarComponent,
  ],
  imports: [CommonModule, CursosRoutingModule, FontAwesomeModule],
  providers: [CursoService],
})
export class CursosModule {}
