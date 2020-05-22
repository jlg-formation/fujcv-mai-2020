import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ArticlesComponent } from './routes/articles/articles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'articles', component: ArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
