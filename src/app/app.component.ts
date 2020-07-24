import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service'; /* IMPORT NEWS API SERVICE */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mArticles:Array<any> /* SAVING NEWS ARTICLES */
  mSources:Array<any> /* SAVING NEWS SOURCES */

  constructor(private newsapi:NewsApiService) {
    console.log('app component called');
  }

  ngOnInit() {
    // LOAD ARTICLES
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // LOAD SOURCES
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
