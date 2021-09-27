import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
