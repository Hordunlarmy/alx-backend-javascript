import { studentClass } from '../main';

const student = new studentClass('John', 'Doe');
console.log(`${student.displayName()} is ${student.workOnHomework()}`);
