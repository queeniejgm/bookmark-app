import {
  bookmarkActionTypes,
  bookmarksLoaded,
  updateBookmark,
} from './bookmark.actions';
import { BookmarkService } from './../service/bookmark.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class BookmarkEffects {
  loadBookmarks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookmarkActionTypes.loadBookmarks),
      concatMap(() => this.bookmarkService.getAllBookmarks()),
      map((bookmarks) => bookmarkActionTypes.bookmarksLoaded({ bookmarks }))
    )
  );

  createBookmark$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(bookmarkActionTypes.createBookmark),
        concatMap((action) =>
          this.bookmarkService.createBookmark(action.bookmark)
        ),
        tap(() => this.router.navigateByUrl('/bookmarks'))
      ),
    { dispatch: false }
  );

  deleteBookmark$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(bookmarkActionTypes.deleteBookmark),
        concatMap((action) =>
          this.bookmarkService.deleteBookmark(action.bookmarkId)
        )
      ),
    { dispatch: false }
  );

  updateBookmark$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(bookmarkActionTypes.updateBookmark),
        concatMap((action) =>
          this.bookmarkService.updateBookmark(
            action.update.id,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private bookmarkService: BookmarkService,
    private actions$: Actions,
    private router: Router
  ) {}
}
