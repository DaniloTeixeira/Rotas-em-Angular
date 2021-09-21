import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoService } from './services/curso';
import { CursosComponent } from './cursos.component';
import { CursoIdComponent } from './components/curso-id';
import { ListaCursosComponent } from './components/lista-cursos';
import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';

@NgModule({
  declarations: [
    CursosComponent,
    CursoIdComponent,
    ListaCursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [CursoService],
  imports: [CommonModule, CursosRoutingModule],
})
export class CursosModule {}
