let container = document.getElementById('container');
let hide = document.getElementById('hide');
let cancel = document.getElementById('cancel');
let nameMovie = document.getElementById('name__movie');

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

        function redirectToFilm() {
            window.open('annexch.html', '_self')
        }

        userCard.addEventListener('click', redirectToFilm)
    }
}



function button() {
    let buttons = document.getElementsByClassName('page')
    for (let button of buttons) {

        async function changePage() {
            page = button.innerText
            await getUsers()
            for (let buttonn of buttons) {
                buttonn.classList.remove('active')
            }
            button.classList.add('active')
        }

        button.addEventListener('click', changePage)
    }
}

async function searchTask() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
        params: {
            page: page,
            keyword: nameMovie.value,
        },
        headers: {
            'X-API-KEY': 'd346c82b-bd03-444d-9600-7a7a36f9358c',
        },
    })
    users = response.data.items
    showTasks()
}
hide.addEventListener('click', searchTask);

cancel.addEventListener('click', getUsers);

function info() {
    
}


getUsers()
button()