//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listener
loadEventListener();

function loadEventListener() {
    //Add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    if(taskInput.value ==''){
        alert('Add task');
    }

    //Create li element
    e.preventDefault();
}