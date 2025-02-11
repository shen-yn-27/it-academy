let container = document.getElementById('container');

let users = []
let page = 1


async function getUsers() {
let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
    params: {
        page: page,
    },
    headers: {
        'X-API-KEY': 'd346c82b-bd03-444d-9600-7a7a36f9358c',
    },
})
users = response.data.items
    console.log('response', response.data.items)
    showTasks()
}

function showTasks() {
    container.innerHTML = ''
    for (let user of users) {
        let userCard = document.createElement('div')
        let userAvatar = document.createElement('div')
        let userName = document.createElement('div')
        let userPhone = document.createElement('div')
        let userEmail = document.createElement('div')

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

        container.append(userCard)
    }
}



function button() {
    let buttons = document.getElementsByClassName('page')
    for (let button of buttons) {

        async function changePage() {
            page = button.innerText
            await getUsers()


            if (button = 'page = button.innerText') {
                this.classList.add('active')
            }
            else if (button !== 'page = button.innerText') {
                this.classList.add('disabled')
            }
        }

        button.addEventListener('click', changePage)
    }
}



getUsers()
button()




