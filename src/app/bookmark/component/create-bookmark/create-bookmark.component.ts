import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../../model/group.model';

import { Bookmark } from './../../model/bookmark.model';
import {
  bookmarkActionTypes,
  createBookmark,
  updateBookmark,
} from './../../store/bookmark.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { Observable } from 'rxjs';
import { getSelectedBookmark } from './../../store/bookmark.selectors';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss'],
})
export class CreateBookmarkComponent implements OnInit {
  bookmarkForm: FormGroup;
  isEdit: boolean = false;
  selectedBookmark: Bookmark;
  group: Group[] = [
    { id: 'Work', name: 'Work' },
    { id: 'Leisure', name: 'Leisure' },
    { id: 'Personal', name: 'Personal' },
  ];

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store.select(getSelectedBookmark).subscribe((data) => {
      if (data) {
        console.log('!!! dyaa', data);
        this.selectedBookmark = data;
        this.isEdit = true;
      }
      this.bookmarkForm = this.formBuilder.group({
        name: [data ? data.name : '', Validators.required],
        url: [data ? data.url : '', Validators.required],
        group: [data ? data.group : '', Validators.required],
      });
    });
  }

  onSubmit() {
    if (this.bookmarkForm.invalid) {
      return;
    }

    if (this.isEdit) {
      const update: Update<Bookmark> = {
        id: this.selectedBookmark._id,
        changes: {
          name: this.bookmarkForm.value.name,
          url: this.bookmarkForm.value.url,
          group: this.bookmarkForm.value.group,
        },
      };

      this.store.dispatch(bookmarkActionTypes.updateBookmark({ update }));
    } else {
      const bookmark: Bookmark = {
        id: uuid.v4(),
        name: this.bookmarkForm.value.name,
        url: this.bookmarkForm.value.url,
        group: this.bookmarkForm.value.group,
      };
      this.store.dispatch(createBookmark({ bookmark }));
    }
  }

  get f() {
    return this.bookmarkForm.controls;
  }
}
