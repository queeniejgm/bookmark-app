import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkListComponent } from './bookmark/component/bookmark-list/bookmark-list.component';
import { CreateBookmarkComponent } from './bookmark/component/create-bookmark/create-bookmark.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarkListComponent,
  },
  { path: 'create-bookmark', component: CreateBookmarkComponent },
  { path: '**', redirectTo: 'bookmarks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
