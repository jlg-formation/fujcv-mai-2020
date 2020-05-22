import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Article[] {
    return [{ name: '100 Clous 10mm', price: 23.2 }];
  }
}
