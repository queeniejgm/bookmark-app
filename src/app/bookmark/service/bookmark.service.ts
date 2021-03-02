import { Bookmark } from './../model/bookmark.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookmarkService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  apiUrl = 'https://www.crudcrud.com/api/5c59dad9fd1c43848635efc7cc25fd6f/';

  getAllBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.apiUrl + 'Bookmarks');
  }

  createBookmark(Bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.apiUrl + 'Bookmarks', Bookmark);
  }

  deleteBookmark(BookmarkId: string): Observable<any> {
    return this.http.delete(this.apiUrl + 'Bookmarks/' + BookmarkId);
  }

  updateBookmark(
    BookmarkId: string | number,
    changes: Partial<Bookmark>
  ): Observable<any> {
    return this.http.put(this.apiUrl + 'Bookmarks/' + BookmarkId, changes);
  }
}
