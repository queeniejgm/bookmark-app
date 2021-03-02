import { Component, OnInit } from '@angular/core';
import { getAllBookmarks } from './../../store/bookmark.selectors';
import { AppState } from './../../../store/reducers/index';
import { Observable } from 'rxjs';
import { Bookmark } from './../../model/bookmark.model';
import { BookmarkService } from './../../service/bookmark.service';
import { Store } from '@ngrx/store';
import { bookmarkActionTypes } from '../../store/bookmark.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;

  bookmarkToBeUpdated: Bookmark;

  isUpdateActivated = false;
  groupedBookmarks = [];

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.select(getAllBookmarks);

    this.bookmarks$.subscribe((data) => {
      let groups = new Set(data.map((item) => item.group));
      this.groupedBookmarks = [];
      groups.forEach((g) =>
        this.groupedBookmarks.push({
          name: g,
          values: data.filter((i) => i.group === g),
        })
      );
    });
  }

  deleteBookmark(bookmarkId: string) {
    this.store.dispatch(bookmarkActionTypes.deleteBookmark({ bookmarkId }));
  }

  viewBookmark(selectedBookmark: Bookmark) {
    this.store.dispatch(
      bookmarkActionTypes.viewBookmark({ bookmark: selectedBookmark })
    );
    this.router.navigate(['/create-bookmark']);
  }
}
