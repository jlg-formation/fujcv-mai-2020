import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  articles = this.http.get<Article[]>('http://localhost:3000/ws/rest/articles');

  constructor(private http: HttpClient) {}

  // async create(article: Article): Promise<void> {
  //   const result = await this.http
  //     .post<Article>('http://localhost:3000/ws/rest/articles', article)
  //     .toPromise().catch((err) => {
  //       console.log('err: ', err);
  //       throw err;
  //     });
  //   console.log('result: ', result);
  // }

  async create(article: Article): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
      .post<Article>('http://localhost:3000/ws/rest/articles', article).subscribe({
        next: (result) => {
          console.log('result: ', result);
          resolve();
        },
        error: (err) => {
          console.log('err: ', err);
          reject(err);
        }
      });
    });

  }

  async delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
      .delete<void>(`http://localhost:3000/ws/rest/articles/${id}`).subscribe({
        next: (result) => {
          console.log('result: ', result);
          resolve();
        },
        error: (err) => {
          console.log('err: ', err);
          reject(err);
        }
      });
    });
  }

  async retrieveAll(): Promise<Article[]> {
    return await this.http.get<Article[]>('http://localhost:3000/ws/rest/articles').toPromise();
  }
}
