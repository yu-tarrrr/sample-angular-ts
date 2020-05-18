import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFeedComponent } from './sample-feed/sample-feed.component';
import { SampleFeedModule } from './sample-feed/sample-feed.module';

@NgModule({
  declarations: [
    AppComponent,
    SampleFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
