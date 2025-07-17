const inputbox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const Todolist = document.getElementById('Todolist');


//global variable
let editTodo = null;
// Function to Add Todolist
const addTodo = ()=>{
   const inputText=inputbox.value.trim();
   if(inputText.length<=0)
   {
    alert("You must write something in your to do");
    return false;
   }

   if(addBtn.value==="Edit")
   {
    EditLocalTodos(editTodo.target.previousElementSibling.innerHTML);
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputbox.value = "";
   }
   else
   {
 // create a li and p tag
   const li = document.createElement('li');
   const p = document.createElement('p');
   p.innerHTML=inputText;
   li.appendChild(p);
   //Create a Edit button
   const EditBtn = document.createElement("button");
   EditBtn.innerHTML = "Edit";
   EditBtn.classList.add("EditStyle");
   li.appendChild(EditBtn);
  //Create a delete button
   const deleteBtn = document.createElement("button");
   deleteBtn.innerHTML = "Remove";
   deleteBtn.classList.add("deleteStyle");
   li.appendChild(deleteBtn);
  
   Todolist.appendChild(li);
   inputbox.value = "";

   saveLocalTodos(inputText);
 }
}
//Function to Update Todolist (Edit/Delete)
const updateTodo = (tag)=>{
//console.log(tag.target.innerHTML);
if(tag.target.innerHTML==="Remove")
{
    Todolist.removeChild(tag.target.parentElement);
    deleteLocaltodos(tag.target.parentElement);
}

if(tag.target.innerHTML==="Edit")
{
    inputbox.value = tag.target.previousElementSibling.innerHTML;
    inputbox.focus();
    addBtn.value = "Edit";
    editTodo=tag;
}
}

//Function to save local storage
const saveLocalTodos = (todo) =>{
    let todos;
  if(localStorage.getItem("todos")===null){
    todos=[];
  }
  else{
     todos = JSON.parse(localStorage.getItem("todos"));
  }
 todos.push(todo);
 localStorage.setItem("todos",JSON.stringify(todos));
}
//Function to get local todo
const getLocalTodos = ()=>{
  let todos;
  if(localStorage.getItem("todos")===null){
    todos=[];
  }
  else{
     todos = JSON.parse(localStorage.getItem("todos"));
     todos.forEach(todo => {
   // create a li and p tag
   const li = document.createElement('li');
   const p = document.createElement('p');
   p.innerHTML=todo;
   li.appendChild(p);

   //Create a Edit button
   const EditBtn = document.createElement("button");
   EditBtn.innerHTML = "Edit";
   EditBtn.classList.add("EditStyle");
   li.appendChild(EditBtn);

  //Create a delete button
   const deleteBtn = document.createElement("button");
   deleteBtn.innerHTML = "Remove";
   deleteBtn.classList.add("deleteStyle");
   li.appendChild(deleteBtn);
  
   Todolist.appendChild(li);
     });
  }
}
//Function to delete local todo
const deleteLocaltodos = (todo)=>{
  let todos;
  if(localStorage.getItem("todos")===null){
    todos=[];
  }
  else{
     todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
 // console.log(todoIndex);
  todos.splice(todoIndex , 1);
  localStorage.setItem("todos",JSON.stringify(todos));
}

const EditLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputbox.value;
    localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click',addTodo);
Todolist.addEventListener('click',updateTodo);







