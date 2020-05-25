import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('toto', [Validators.required]),
    price: new FormControl(12.34, [Validators.required]),
  });
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.articleService.create(this.f.value as Article);
    this.router.navigateByUrl('/articles');
  }
}
