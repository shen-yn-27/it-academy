let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("button");
let list = document.getElementById("list");
let count = 0

function addTask() {
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let deleteButton = document.createElement("button");
    let taskNumber = document.createElement("input");
    
    function deleteTask() {
        task.remove();
        count = count - 1
    }
    
    deleteButton.addEventListener("click", deleteTask);

    taskTitle.innerHTML =`<b>Название:</b> ${ title.value }`
    taskDescription.innerHTML = `<b>Описание:</b> ${ description.value }`
    deleteButton.innerHTML = 'Удалить'

    count = count + 1
    taskNumber.innerHTML = `<b>Задча №${ count }</b>`

    task.classList.add('task');
    taskTitle.classList.add('taskTitle');
    taskDescription.classList.add('task-description');
    

    task.append(taskTitle, taskDescription);

    task.append(taskTitle, taskDescription, deleteButton);

    list.append(task);

    title.value = ''
    description.value = ''
}

button.addEventListener("click", addTask)