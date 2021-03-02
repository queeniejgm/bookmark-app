import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkService } from './service/bookmark.service';
import { BookmarkEffects } from './store/bookmark.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, EffectSources, EffectsRootModule } from '@ngrx/effects';
import { bookmarkReducer } from './store/bookmark.reducers';
import { BookmarkListComponent } from './component/bookmark-list/bookmark-list.component';
import { CreateBookmarkComponent } from './component/create-bookmark/create-bookmark.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookmarkListComponent, CreateBookmarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    EffectsRootModule,
    EffectsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarkEffects]),
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [BookmarkService],
  bootstrap: [],
  exports: [BookmarkListComponent, CreateBookmarkComponent],
})
export class BookmarkModule {}
