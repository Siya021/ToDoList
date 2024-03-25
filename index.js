// function addingTask() {
//     let taskName = document.querySelector("task-name");
//     let tasks = document.querySelector("tasks")

//     if (taskName.value === "") {
//         alert("Task Missing!!!");
//         return
//     }
//     let task = document.createElement("li");
//     let taskDescription= document.createElement(taskName.value);
//     task.appendChild(taskDescription);
//     tasks.appendChild(task);

//     taskName.value= "";
// } 

// Tasks
// const taskInput = document.getElementById('task-name');
// const addbtn = document.querySelector('.add-btn');
// const tasksLists = document.getElementById('tasks')

// Task management
const taskInput = document.getElementById('task-name');
const addBtn = document.querySelector('.add-btn');
const tasksList = document.getElementById('tasks');

addBtn.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskName;
        tasksList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Login/Register
// const loginForm = document.getElementById('login-form');
// const registerForm = document.getElementById('register-form');
// const loginBtn = document.getElementById('login-btn');
// const registerBtn = document.getElementById('register-btn');

// loginBtn.addEventListener('click', showLoginForm);
// registerBtn.addEventListener('click', showRegisterForm);

// function showLoginForm() {
//     loginForm.style.display = 'block';
//     registerForm.style.display = 'none';
// }

// function showRegisterForm() {
//     loginForm.style.display = 'none';
//     registerForm.style.display = 'block';
// }

// function loginUser() {
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;

// }

// function registerUser() {
//     const username = document.getElementById('register-username').value;
//     const email = document.getElementById('register-email').value;
//     const password = document.getElementById('register-password').value;
// }

// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     loginUser();
// });

// registerForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     registerUser();
// });
