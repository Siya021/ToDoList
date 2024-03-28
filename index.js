
const addBtn = document.querySelector('#add-btn');
const todoInput = document.querySelector('#todo-input');
const resultDisplay = document.querySelector('#result-display');
let todoList = JSON.parse(localStorage.getItem('todo-list')) ? JSON.parse(localStorage.getItem('todo-list')) : [];
let tempID = todoList[todoList.length-1] ? todoList[todoList.length-1].id + 1: 1;
let todoDeleteButtons;
let todoCheckBoxes;
let editButtons;
let time = document.getElementById("real-time");
// let  = document.getElementById("real-date");
addBtn.addEventListener('click', addItem);
const currentDateTimeSA = new Date(new Date().toLocaleString("en-US", {timeZone: "Africa/Johannesburg"}))

const currentTimeSA = currentDateTimeSA.toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg'});
const task = {
    tempID,
    todoInput,
    date,
}

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
// setInterval(()=>{
//     let d = new Date();
//     time.innerHTML = d.toLocaleTimeString()
// },1000);

// let today = new Date();
// let dd = String(today.getDate()).padStart(2, "0");
// let mm = String(today.getMonth() + 1).padStart(2, "0"); 
// let yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);


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
                <p class="date">${item.date}</p>
                <button id="edit-btn${item.id}" class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg></button>
                <button id="close-btn${item.id}" class="close-btn">X</button>
            </div>
            `
        } else {
            resultDisplay.innerHTML += 
            `
            <div class="todo-item">
                <input type="checkbox" id="completed${item.id}" class="todo-item-checkbox" checked>
                <p class="checked">${item.name}</p>
                <p class="date">${item.date}</p>
                <button id="edit-btn${item.id}" class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg></button>
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
    email = document.getElementById("email").value;
    password = document.getElementById("passwd").value

    let user_rec = new Array();
    user_rec = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_rec.some((v)=>{
        return v.email == email
    })){
        alert("Hayibo !! Dluplicate")
    }else{
        user_rec.push({
            "name" : name,
            "email": email,
            "passwd": password
        })
        localStorage.setItem("users",JSON.stringify(user_rec))
    }
}

function logIn(){
    let email,password;

    email = document.getElementById("email").value;
    password = document.getElementById("passwd").value;

    let user_rec = new Array();
    user_rec = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if( user_rec.some((v)=>{
            return v.email == email && v.password == password
        })){
            alert("Awe Login Successful");
            let currentUser = user_rec.filter((v)=>{
                return v.email == email && v.password == password
            })[0]

            localStorage.setItem("name", currentUser.name);
            localStorage.setItem("email",currentUser.email);
            window.location.href = "index.html";
        }else{
            alert("Login Failed")
        }
    
}

function logOut(){
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    window.location.href = "login.html"
}
renderList()


window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });