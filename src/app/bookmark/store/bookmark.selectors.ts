import { BookmarkState } from './bookmark.reducers';
import { Bookmark } from './../model/bookmark.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './bookmark.reducers';

export const bookmarkFeatureSelector = createFeatureSelector<BookmarkState>(
  'bookmarks'
);

export const getAllBookmarks = createSelector(
  bookmarkFeatureSelector,
  selectAll
);

export const areBookmarksLoaded = createSelector(
  bookmarkFeatureSelector,
  (state) => state.bookmarksLoaded
);
