import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookmarkService } from './bookmark/service/bookmark.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkResolver } from './bookmark/bookmark.resolver';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookmarkModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    BrowserAnimationsModule,
  ],
  providers: [BookmarkResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
