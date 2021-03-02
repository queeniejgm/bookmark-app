import { Component, OnInit } from '@angular/core';
import { getAllBookmarks } from './../../store/bookmark.selectors';
// import {
//   bookmarkActionTypes,
//   loadBookmarks,
// } from './../../store/bookmark.actions';
import { AppState } from './../../../store/reducers/index';
import { Observable } from 'rxjs';
import { Bookmark } from './../../model/bookmark.model';
import { BookmarkService } from './../../service/bookmark.service';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { threadId } from 'worker_threads';

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

  constructor(
    private bookmarkService: BookmarkService,
    private store: Store<AppState>
  ) {}

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

      console.log('!!! groupedBookmarks', this.groupedBookmarks);
    });
  }
}
