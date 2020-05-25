import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() {}

  ngOnInit(): void {}
}
