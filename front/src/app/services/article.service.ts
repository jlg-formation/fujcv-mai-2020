import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  async getArticles(): Promise<Article[]> {
    return await this.http.get<Article[]>('http://localhost:3000/ws/rest/articles').toPromise();
  }
}
