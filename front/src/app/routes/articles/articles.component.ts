import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    (async () => {
      this.articles = await this.articleService.getArticles();
    })();
  }
}
