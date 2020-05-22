import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles = [
    { name: 'tournevis', price: 12.34 },
    { name: 'marteau', price: 32.34 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
