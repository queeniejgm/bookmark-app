import { areBookmarksLoaded } from './store/bookmark.selectors';
import { loadBookmarks, bookmarksLoaded } from './store/bookmark.actions';
import { AppState } from './../store/reducers/index';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';

@Injectable()
export class BookmarkResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areBookmarksLoaded),
      tap((bookmarksLoaded) => {
        if (!bookmarksLoaded) {
          this.store.dispatch(loadBookmarks());
        }
      }),
      filter((bookmarksLoaded) => bookmarksLoaded),
      first()
    );
  }
}
