// Define the Student interface
export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

// Define two example Student objects
const student1: Student = {
    firstName: 'Tosin',
    lastName: 'Bamgboye',
    age: 27,
    location: 'Abeokuta',
};

const student2: Student = {
    firstName: 'Deo',
    lastName: 'Adenekan',
    age: 28,
    location: 'Ibadan',
};

// Array of students
const students: Student[] = [
    student1,
    student2,
];

// Function to render a table of students
export const renderTable = (students: Student[]): void => {
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);

    headRow.insertAdjacentHTML('beforeend', '<th>First Name</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

    students.forEach(student => {
        const studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', `<td style="border: 1px solid #ddd; padding: 8px;">${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td style="border: 1px solid #ddd; padding: 8px;">${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
    });

    document.body.appendChild(table);
};

// Ensure the DOM is fully loaded before rendering the table
if (typeof document === 'undefined') {
    console.error('This script is meant to be run in a browser');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        renderTable(students);
    });
}
