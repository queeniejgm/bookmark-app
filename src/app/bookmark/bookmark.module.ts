import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkService } from './service/bookmark.service';
import { BookmarkEffects } from './store/bookmark.effects';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookmarkReducer } from './store/bookmark.reducers';
import { BookmarkListComponent } from './component/bookmark-list/bookmark-list.component';
import { CreateBookmarkComponent } from './component/create-bookmark/create-bookmark.component';

@NgModule({
  declarations: [BookmarkListComponent, CreateBookmarkComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarkEffects]),
  ],
  providers: [BookmarkService],
})
export class BookmarkModule {}
