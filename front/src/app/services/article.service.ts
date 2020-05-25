import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = this.http.get<Article[]>('http://localhost:3000/ws/rest/articles');

  constructor(private http: HttpClient) {}

}
