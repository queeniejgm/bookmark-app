import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkService } from './service/bookmark.service';
import { BookmarkEffects } from './store/bookmark.effects';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookmarkReducer } from './store/bookmark.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarkEffects]),
  ],
  providers: [BookmarkService],
})
export class BookmarkModule {}
