import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github.component';
import { ResultComponent } from './result';

const routes: Routes = [
  { path: '', component: GithubComponent },
  { path: 'result/:userName', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
