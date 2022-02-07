import { lastValueFrom } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Component, OnInit } from '@angular/core';
import { resDataPosts } from 'src/app/models/base.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public lsPosts: resDataPosts[] = [];

  constructor(private _baseServive: BaseService) {}

  public first = 0;
  public rows = 10;

  async ngOnInit() {
    this.lsPosts = await lastValueFrom(this._baseServive.getPosts());
  }
}
