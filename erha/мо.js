let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("button");
let list = document.getElementById("list");
let searchInput = document.getElementById("search");
let searchButton = document.getElementById("search-button");
let resetButton = document.getElementById("reset-button");
let count = 0
let tasksListHtml = ''

function addTask() {
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let deleteButton = document.createElement("button");
    let taskNumber = document.createElement("div");
    
    function deleteTask() {
        task.remove();
        count = count - 1
    }
    
    deleteButton.addEventListener("click", deleteTask);

    taskTitle.innerHTML =`<b>Название:</b> ${ title.value }`
    taskDescription.innerHTML = `<b>Описание:</b> ${ description.value }`
    deleteButton.innerHTML = 'Удалить'

    count = count + 1
    taskNumber.innerHTML = `<b>Задча №${count}</b>`

    task.classList.add('task');
    taskTitle.classList.add('taskTitle');
    taskDescription.classList.add('task-description');
    

    task.append( taskTitle, taskDescription);

    task.append(taskNumber, taskTitle, taskDescription, deleteButton);

    list.append(task);

    tasksListHtml = list.innerHTML;

    title.value = ''
    description.value = ''
}

button.addEventListener("click", addTask)

function searchTask() {
    let tasks = document.getElementsByClassName('task');
    for (let task of tasks) {
        let titles = task.getElementsByClassName('taskTitle');
        let title = titles[0];

        if (title.innerText.includes(searchInput.value) == false) {
           task.remove();
        }
    }
}

searchButton.addEventListener("click", searchTask)

function resetTask() {
    list.innerHTML = tasksListHtml
}
    
resetButton.addEventListener("click", resetTask);