import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkResolver } from './bookmark/bookmark.resolver';
import { BookmarkListComponent } from './bookmark/component/bookmark-list/bookmark-list.component';
import { CreateBookmarkComponent } from './bookmark/component/create-bookmark/create-bookmark.component';

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarkListComponent,
    resolve: {
      bookmarks: BookmarkResolver,
    },
  },
  { path: 'create-bookmark', component: CreateBookmarkComponent },
  { path: '**', redirectTo: 'bookmarks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
