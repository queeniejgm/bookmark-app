import { Group } from './group.model';

export interface Bookmark {
  id: string;
  name: string;
  url: string;
  group: Group;
  _id?: string;
}
