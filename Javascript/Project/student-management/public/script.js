let students = []; // Array to store student data

// Add Student
document
  .getElementById('student-form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const studentId = document.getElementById('studentId').value;

    // Add student to array
    students.push({ name, age, studentId });
    renderStudents(); // Refresh table
    this.reset(); // Clear form
  });

// Render Students
function renderStudents() {
  const tableBody = document.getElementById('student-table');
  tableBody.innerHTML = ''; // Clear previous rows
  students.forEach((student, index) => {
    const row = `
      <tr>
        <td class="border p-2">${student.name}</td>
        <td class="border p-2">${student.age}</td>
        <td class="border p-2">${student.studentId}</td>
        <td class="border p-2">
          <button onclick="deleteStudent(${index})" class="bg-red-500 text-white p-1 rounded hover:bg-red-700">
            Delete
          </button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Delete Student
function deleteStudent(index) {
  students.splice(index, 1); // Remove student from array
  renderStudents(); // Refresh table
}
