function log(text) {
console.log(text);
};

const buttonAdd = document.getElementById('button');
const task = document.getElementById('task');
const taskField = document.getElementById('to-do-field');
let newTask = document.createElement('ul');
let count = document.getElementById('count');
let counter = 0;


task.addEventListener('input', () => {
   if(task.value.length >= 1) {
   buttonAdd.removeAttribute('disabled');
   }
})

buttonAdd.addEventListener('click', () => {
   addNewTask();
   countAddedTask();
});

function addNewTask () {
   let listOfTask = document.createElement('li');
   listOfTask.classList.add('tasks-style');
   listOfTask.innerText =  task.value;

   let deleteBtn = document.createElement('button');
   deleteBtn.setAttribute('id','deleteBtn');
   deleteBtn.innerText = 'Delete';

   listOfTask.appendChild(deleteBtn);
   newTask.appendChild(listOfTask);

   taskField.appendChild(newTask);

   task.value = ' ';
   buttonAdd.setAttribute('disabled', 'disabled');

   deleteBtn.addEventListener('click', () =>{
      listOfTask.remove();
      countDeletedTask();
   });
};

function countAddedTask () {
   counter+=1;
   return count.innerText = counter;
};

function countDeletedTask () {
   counter--;
   return count.innerText = counter;
};

let followBtn = document.getElementById('followers');

followBtn.addEventListener('click',()=>{
   document.getElementById('all-tasks').classList.add('hide');
   document.getElementById('users-info').classList.remove('hide');
})

let goBack = document.getElementById('go-back');

goBack.addEventListener('click',()=>{
   document.getElementById('all-tasks').classList.remove('hide');
   document.getElementById('users-info').classList.add('hide');

})





