import {Group} from './Group';
import {Student} from './Student';
import {Classes} from './Classes';

export class PresenceList {
  id: number;
  date: Date;
  group: Group;
  classes: Classes;
  students: Student[];
}
