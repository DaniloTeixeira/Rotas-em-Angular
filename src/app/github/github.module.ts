import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { ResultComponent } from './result';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github/github.service';

@NgModule({
  declarations: [GithubComponent, ResultComponent],
  imports: [CommonModule, GithubRoutingModule, FormsModule, HttpClientModule],
  providers: [GithubService],
})
export class GithubModule {}
