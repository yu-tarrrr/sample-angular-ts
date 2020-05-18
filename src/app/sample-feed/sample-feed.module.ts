import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHeaderComponent } from '../molecules/feed-header/feed-header.component';

@NgModule({
  declarations: [
    FeedHeaderComponent
  ],
  exports :[FeedHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SampleFeedModule { }
