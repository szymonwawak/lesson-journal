import {Group} from './Group';
import {Subject} from '../students-panel/components/search-panel/search-panel.component';
import {PassedClasses} from './PassedClasses';

export class Classes {
  id: number;
  name: string;
  day: number;
  group: Group;
  subject: Subject;
  passedClasses: PassedClasses[];
}
