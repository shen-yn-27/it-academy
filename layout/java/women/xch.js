let container = document.getElementById('container');

let users = []


async function getUsers() {
let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
    headers: {
        'X-API-KEY': 'd346c82b-bd03-444d-9600-7a7a36f9358c',
    },
})
users = response.data.items
    console.log('response', response.data.items)
    showTasks()
}

function showTasks() {

    for (let user of users) {
        //Создаём карточку пользователя
        let userCard = document.createElement('div')
        let userAvatar = document.createElement('div')
        let userName = document.createElement('div')
        let userPhone = document.createElement('div')
        let userEmail = document.createElement('div')

        //Добавляем карточке пользвателя класс user-card
        userCard.classList.add('movie')

        userAvatar.classList.add('movie__cover-inner')

        userName.classList.add('movie__title')

        userPhone.classList.add('movie__average')

        userEmail.classList.add('movie__titles')


        userAvatar.innerHTML = `<img src="${user.posterUrl}" alt="" class="movie__cover">`

        userName.innerHTML = user.nameRu
        userPhone.innerHTML = user.ratingKinopoisk
        userEmail.innerHTML = user.year

        userCard.append(userAvatar)
        userCard.append(userName, userPhone)
        userCard.append(userEmail)

        //Поместить карточку пользователя в конец списка
        container.append(userCard)
    }
}

getUsers()

