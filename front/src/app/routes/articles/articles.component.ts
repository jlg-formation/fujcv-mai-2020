import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  selectedList: string[] = [];
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

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
}
