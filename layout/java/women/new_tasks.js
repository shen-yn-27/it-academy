let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button');

let new_tasks = [];

//Функция для получения списка задач с овывоао.com
async function getTasks() {
    let response = await axios.get('https://dummyjson.com/posts')
    new_tasks = response.data.posts;
    showTasks()
}

function showTasks() {
 list.innerHTML = ' ';
    for (const [index ,new_task] of new_tasks.entries()) {

     let task = document.createElement("div");
     let taskTitle = document.createElement("div");
     let taskDescription = document.createElement("div");
     let deleteButton = document.createElement("button");
     let taskNumber = document.createElement("div");

     async function deleteTask() {
         let ok = confirm(`Вы уверены, что хотите удалить задачу"${new_task.title}"`)
         if (ok) {
             let response = await axios.delete(`https://dummyjson.com/posts/${ new_task.id }`)
             let task = response.data
             if (task.isDeleted) {
                 new_tasks.splice(index,1)
                 showTasks()
             }
         }

     }

     deleteButton.addEventListener("click", deleteTask);

     taskTitle.innerHTML =`<b>Название:</b> ${ new_task.title }`
     taskDescription.innerHTML = `<b>Описание:</b> ${ new_task.body }`
     deleteButton.innerHTML = 'Удалить'

     task.classList.add('task');
     taskTitle.classList.add('taskTitle');
     taskDescription.classList.add('task-description');


     task.append( taskTitle, taskDescription);

     task.append(taskNumber, taskTitle, taskDescription, deleteButton);

     list.append(task);
 }
}

async function addTask() {
    let response = await axios.post('https://dummyjson.com/posts/add', {
        title: title.value,
        body: description.value,
        userId: 5,
    })
    let task = response.data
    if (task.id) {
        new_tasks.unshift(task)
        showTasks()
    }
    }
button.addEventListener("click", addTask);

async function searchTask() {
    let response = await axios.get(`https://dummyjson.com/posts/search?q=${ searchInput.value }`)
    new_tasks =response.data.posts
    showTasks()
}
searchButton.addEventListener('click', searchTask);

resetButton.addEventListener('click', getTasks);

//Получим список задач при загрузке страницы
getTasks()