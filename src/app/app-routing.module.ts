import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth';
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
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'github',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./github/github.module').then((m) => m.GithubModule),
  },
  // {
  //   //direciona uruário para tela de login, caso rota digitada não exista, deixar sempre por último
  //   path: '**',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./login/login.module').then((m) => m.LoginModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*, { useHash: true }*/)], // utilizar hash nas rotas
  exports: [RouterModule],
})
export class AppRoutingModule {}
