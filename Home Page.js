// Logout functionality
document.querySelector('.user-icon').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn'); // Remove login flag
    window.location.href = 'login.html'; // Redirect to Login Page
});
document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const courses = document.querySelectorAll('.vid-list');

    courses.forEach(course => {
        const title = course.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});
document.getElementById('searchBar').addEventListener('input', function () {
const searchTerm = this.value.toLowerCase();
const courses = document.querySelectorAll('.vid-list');
let found = false;

// Hide all courses initially
courses.forEach(course => {
course.style.display = 'none';
});

// Show matching courses
courses.forEach(course => {
const title = course.querySelector('.vid-info a').textContent.toLowerCase();
if (title.includes(searchTerm)) {
    course.style.display = 'block';
    found = true;
}
});

// Show "Result Not Found" message if no courses match
const resultNotFound = document.getElementById('resultNotFound');
if (!found) {
if (!resultNotFound) {
    const notFoundBox = document.createElement('div');
    notFoundBox.id = 'resultNotFound';
    notFoundBox.textContent = 'Result Not Found';
    notFoundBox.style.textAlign = 'center';
    notFoundBox.style.fontSize = '24px';
    notFoundBox.style.color = 'white';
    notFoundBox.style.marginTop = '20px';
    document.querySelector('.content-platform').prepend(notFoundBox);
}
} else {
if (resultNotFound) {
    resultNotFound.remove();
}
}
});