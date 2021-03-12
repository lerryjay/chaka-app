import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from './component/feed-item/feed-item.component';
import { NewsComponent } from './news.component';

import { NewsRoutingModule } from "./news-routing.mdoule";



@NgModule({
  declarations: [NewsComponent,FeedItemComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
