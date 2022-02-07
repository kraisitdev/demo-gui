import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resDataPosts } from '../models/base.model';

@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(private _http: HttpClient) {}

  getPosts() {
    const currUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this._http.get<resDataPosts[]>(currUrl, {});
  }
}
