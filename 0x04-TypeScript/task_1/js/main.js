"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentClass = exports.printTeacher = void 0;
// Printing teachers
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
exports.printTeacher = printTeacher;
// StudentClass
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
exports.studentClass = studentClass;
