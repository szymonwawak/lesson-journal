import {Group} from './Group';
import {Score} from './Score';

export class Student {
  id: number;
  name: string;
  surname: string;
  age: number;
  group: Group;
  group_id: number;
  scores: Score[];
}
