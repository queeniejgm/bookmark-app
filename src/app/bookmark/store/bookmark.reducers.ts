import { Bookmark } from './../model/bookmark.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  bookmarkActionTypes,
  bookmarksLoaded,
  viewBookmark,
} from './bookmark.actions';

export interface BookmarkState extends EntityState<Bookmark> {
  bookmarksLoaded: boolean;
  selectedBookmark: Bookmark | null;
}

export const adapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();

export const initialState = adapter.getInitialState({
  bookmarksLoaded: false,
  selectedBookmark: null,
});

export const _bookmarkReducer = createReducer(
  initialState,

  on(bookmarkActionTypes.bookmarksLoaded, (state, action) => {
    return adapter.setAll(action.bookmarks, {
      ...state,
      bookmarksLoaded: true,
    });
  }),

  on(bookmarkActionTypes.viewBookmark, (state, { bookmark }) => {
    return { ...state, selectedBookmark: bookmark };
  }),

  on(bookmarkActionTypes.createBookmark, (state, action) => {
    return adapter.addOne(action.bookmark, state);
  }),

  on(bookmarkActionTypes.deleteBookmark, (state, action) => {
    return adapter.removeOne(action.bookmarkId, state);
  }),

  on(bookmarkActionTypes.updateBookmark, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export function bookmarkReducer(state, action) {
  return _bookmarkReducer(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();
