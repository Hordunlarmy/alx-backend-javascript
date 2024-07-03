interface DirectorInterface {
    workfromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workfromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workfromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workfromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a coffee break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}

export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
