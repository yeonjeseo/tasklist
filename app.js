//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listener
loadEventListener();

function loadEventListener() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    if(taskInput.value ==''){
        alert('Add task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';

    //Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item scondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);
    // Append li to the ul
    taskList.appendChild(li);

    // Clear Input
    taskInput.value = '';

    e.preventDefault();
}