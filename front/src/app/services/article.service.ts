import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  articles = this.http.get<Article[]>('http://localhost:3000/ws/rest/articles');

  constructor(private http: HttpClient) {}

  create(article: Article) {
    this.http.post('http://localhost:3000/ws/rest/articles', article).subscribe({
      next: (article) => {
        console.log('article: ', article);
      },
      error: (err) => {
        console.log('err: ', err);
      }
    });
  }

}
