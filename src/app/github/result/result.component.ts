import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.githubService.getUserByName(userName).subscribe((user) => {
      this.user = user;
    });
  }
}
