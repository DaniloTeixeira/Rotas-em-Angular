import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos.component';
import { ListaCursosComponent } from './components/lista-cursos';
import { CursoDetalheComponent } from './components/curso-detalhe';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado';
import { CursoService } from './services/curso';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    ListaCursosComponent,
  ],
  providers: [CursoService],
  imports: [CommonModule, CursosRoutingModule],
})
export class CursosModule {}
