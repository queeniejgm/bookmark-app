import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../../model/group.model';

import { Bookmark } from './../../model/bookmark.model';
import { createBookmark } from './../../store/bookmark.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss'],
})
export class CreateBookmarkComponent implements OnInit {
  bookmarkForm: FormGroup;
  group: Group[] = [
    { id: 1, name: 'Work' },
    { id: 1, name: 'Leisure' },
    { id: 1, name: 'Personal' },
  ];

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bookmarkForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      group: ['', Validators.required],
    });
  }

  createBookmark() {
    console.log(this.bookmarkForm.value);

    if (this.bookmarkForm.invalid) {
      return;
    }

    const bookmark: Bookmark = {
      id: uuid.v4(),
      name: this.bookmarkForm.value.name,
      url: this.bookmarkForm.value.url,
      group: this.bookmarkForm.value.group,
    };
    this.store.dispatch(createBookmark({ bookmark }));
  }
}
