import { Bookmark } from './../model/bookmark.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadBookmarks = createAction(
  '[Bookmarks List] Load Bookmarks via Service'
);

export const bookmarksLoaded = createAction(
  '[Bookmarks Effect] Bookmarks Loaded Successfully',
  props<{ bookmarks: Bookmark[] }>()
);

export const createBookmark = createAction(
  '[Create Bookmark Component] Create Bookmark',
  props<{ bookmark: Bookmark }>()
);

export const deleteBookmark = createAction(
  '[Bookmarks List Operations] Delete Bookmark',
  props<{ bookmarkId: string }>()
);

export const updateBookmark = createAction(
  '[Bookmarks List Operations] Update Bookmark',
  props<{ update: Update<Bookmark> }>()
);

export const bookmarkActionTypes = {
  loadBookmarks,
  bookmarksLoaded,
  createBookmark,
  deleteBookmark,
  updateBookmark,
};
