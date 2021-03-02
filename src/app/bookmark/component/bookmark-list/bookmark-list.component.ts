import { Component, OnInit } from '@angular/core';
import { getAllBookmarks } from './../../store/bookmark.selectors';
import { bookmarkActionTypes } from './../../store/bookmark.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark } from './../../model/bookmark.model';
import { BookmarkService } from './../../service/bookmark.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;

  bookmarkToBeUpdated: Bookmark;

  isUpdateActivated = false;

  constructor(
    private bookmarkService: BookmarkService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.select(getAllBookmarks);
  }
}
