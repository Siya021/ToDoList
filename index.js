const addBtn = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const resultDisplay = document.querySelector('#result-display');
let todoList = JSON.parse(localStorage.getItem('todo-list')) ? JSON.parse(localStorage.getItem('todo-list')) : [];
let tempID = todoList[todoList.length-1] ? todoList[todoList.length-1].id + 1: 1;
let todoDeleteButtons;
let todoCheckBoxes;
let editButtons;

addBtn.addEventListener('click', addItem);

function addItem(){
    event.preventDefault();
    if(todoInput.value == ''){
        alert('Input is Empty!')
    } else {
        todoList.push({
            id: tempID,
            name: todoInput.value,
            completed: false,
            date: new Date()
        });
        tempID++;
        todoInput.value = '';
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        renderList();
    }
}


function deleteButtons(){
    todoDeleteButtons = [...document.querySelectorAll('.close-btn')];
    todoDeleteButtons.forEach((item)=>{
        item.addEventListener('click',deleteItem)
    })
}
function deleteItem(){
    let startPoint = todoDeleteButtons.indexOf(event.target);
    todoList.splice(startPoint, 1);
    localStorage.setItem('todo-list', JSON.stringify(todoList))
    renderList();
}
function checkBoxes(){
    todoCheckBoxes = [...document.querySelectorAll('.todo-item-checkbox')];
    todoCheckBoxes.forEach((item)=>{
        item.addEventListener('click', checkBox)
    })
}
function checkBox(){
    let indexPosition = todoCheckBoxes.indexOf(event.target);
    if(todoList[indexPosition].completed === true){
        todoList[indexPosition].completed = false;
    } else {
        todoList[indexPosition].completed = true
    }
    renderList();
}

function editItem(){
editButtons = [...document.querySelectorAll('.edit-btn')];
editButtons.forEach((item)=>{
    item.addEventListener('click', editTodoItem)
})
}
function editTodoItem(){
    let newName = prompt('Enter new name:');
    let index = editButtons.indexOf(event.target);
    todoList[index].name = newName;
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    renderList();
}
function renderList(){
    resultDisplay.innerHTML = '';
    todoList.forEach((item)=>{
        if(item.completed === false){
            resultDisplay.innerHTML += 
            `
            <div class="todo-item">
                <input type="checkbox" id="completed${item.id}" class="todo-item-checkbox">
                <p>${item.name}</p>
                <button id="edit-btn${item.id}" class="edit-btn">Edit</button>
                <button id="close-btn${item.id}" class="close-btn">X</button>
            </div>
            `
        } else {
            resultDisplay.innerHTML += 
            `
            <div class="todo-item">
                <input type="checkbox" id="completed${item.id}" class="todo-item-checkbox" checked>
                <p class="checked">${item.name}</p>
                <button id="edit-btn${item.id}" class="edit-btn">Edit</button>
                <button id="close-btn${item.id}" class="close-btn">X</button>
            </div>
            `
        }
    })
    deleteButtons();
    checkBoxes();
    editItem();
}
function saveProfile(){
    let name, email, password;

    name = document.getElementById("name").value;
    
}


renderList();