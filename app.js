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
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click',clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup',filterTasks);
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

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(){
    // taskList.innerHTML = '';
    // Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Tasks ******
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );    //querySelectorAll returns node list!!

}