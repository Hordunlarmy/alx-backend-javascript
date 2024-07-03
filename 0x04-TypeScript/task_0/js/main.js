"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
// Define two example Student objects
var student1 = {
    firstName: 'Tosin',
    lastName: 'Bamgboye',
    age: 27,
    location: 'Abeokuta',
};
var student2 = {
    firstName: 'Deo',
    lastName: 'Adenekan',
    age: 28,
    location: 'Ibadan',
};
// Array of students
var students = [
    student1,
    student2,
];
// Function to render a table of students
var renderTable = function (students) {
    var table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    var headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
    headRow.insertAdjacentHTML('beforeend', '<th>First Name</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    students.forEach(function (student) {
        var studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', "<td style=\"border: 1px solid #ddd; padding: 8px;\">".concat(student.firstName, "</td>"));
        studentRow.insertAdjacentHTML('beforeend', "<td style=\"border: 1px solid #ddd; padding: 8px;\">".concat(student.location, "</td>"));
        table.insertAdjacentElement('beforeend', studentRow);
    });
    document.body.appendChild(table);
};
exports.renderTable = renderTable;
// Ensure the DOM is fully loaded before rendering the table
if (typeof document === 'undefined') {
    console.error('This script is meant to be run in a browser');
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        (0, exports.renderTable)(students);
    });
}
