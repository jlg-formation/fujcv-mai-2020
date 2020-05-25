import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
  }

  select(event: MouseEvent) {
    console.log('select', event);
  }
}
