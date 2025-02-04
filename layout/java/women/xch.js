let pages  = document.getElementById('pages');

let users = []

async function getUsers() {
let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?', {
    headers: {
        'X-API-KEY': 'd346c82b-bd03-444d-9600-7a7a36f9358c',
        'Content-Type':'TV_SERIES',
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
        userPhone.innerHTML = user.ratingImdb
        userEmail.innerHTML = user.year

        userCard.append(userAvatar, userName, userPhone, userEmail)
        countries.append(userCard)


        //Поместить карточку пользователя в конец списка
        pages.append(userCard)
    }
}

getUsers()