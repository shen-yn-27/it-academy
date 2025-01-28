let usersList = document.getElementById('users-list');

//Список пользователей
let users = []

//Асинхронная функция получения списка пользователей
//Асинхронная функция умеет дожидаться выполнения операции
async function getUsers() {
    //Выполняем запрос на получения пользователей
    //
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    users = response.data.users

    console.log('response', response.data.users)
    showUsers()
}


function showUsers() {
    //Циклы в JavaScript
    //for (let элемент_массива of массив) {
    //действия для выполнения над элементом
    //}

    for (let user of users) {
        //Создаём карточку пользователя
        let userCard = document.createElement('div')
        let userAvatar = document.createElement('div')
        let userName = document.createElement('h2')
        let userPhone = document.createElement('p')
        let userEmail = document.createElement('p')
        let userBirthday = document.createElement('p')

        //Добавляем карточке пользвателя класс user-card
        userCard.classList.add('user-card')

        userAvatar.classList.add('user-avatar')

        userName.classList.add('user-name')

        userAvatar.innerHTML = `<img src="${ user.image }" alt="">`

        userName.innerHTML = user.id
        userPhone.innerHTML =`<b></b> ${user.title} `
        userEmail.innerHTML =`<b></b> ${user.body} `
        userBirthday.innerHTML =`<b></b> ${user.userId } `

        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday)


        //Поместить карточку пользователя в конец списка
        usersList.append(userCard)
    }
}

getUsers()