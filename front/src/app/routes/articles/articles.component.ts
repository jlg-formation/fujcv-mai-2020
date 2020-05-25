import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  selectedList: string[] = [];
  articles$ = new BehaviorSubject<Article[]>([]);
  error = '';
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    try {
      const articles = await this.articleService.retrieveAll();
      if (articles.length > 3) {
        throw new Error();
      }
      this.articles$.next(articles);
    } catch (err) {
      this.error = 'oops ... erreur lors du refresh';
    }
  }

  select(event: MouseEvent) {
    console.log('select', event);
    const row = (event.target as HTMLElement).classList.contains('row')
      ? (event.target as HTMLElement)
      : (event.target as HTMLElement).parentElement;
    const cl = row.classList;
    const id = row.getAttribute('id');
    if (cl.contains('selected')) {
      this.selectedList.splice(
        this.selectedList.findIndex((item) => item === id),
        1
      );
      cl.remove('selected');
      console.log('this.selectedList: ', this.selectedList);
      return;
    }
    this.selectedList.push(id);
    cl.add('selected');
    console.log('this.selectedList: ', this.selectedList);
  }

  async delete() {
    try {
      console.log('delete');
      for (let id of this.selectedList) {
        console.log('id: ', id);
        await this.articleService.delete(id);
        this.selectedList.splice(
          this.selectedList.findIndex((item) => item === id),
          1
        );
      }
      await this.refresh();
    } catch (e) {
      console.log('e: ', e);
    }
  }
}
