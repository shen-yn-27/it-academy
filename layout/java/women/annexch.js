let container = document.getElementById('container');
const API_KEY = "d346c82b-bd03-444d-9600-7a7a36f9358c";
//4d5b1014-2ce3-49d6-b2ac-e47e01ed4533
let movie = null;

async function getMovie() {
    // Получаем список параметров из адреса страницы в браузере - window.location.search
    const params = new URLSearchParams(window.location.search);
    // Получаем параметр id, который мы передали со страницы со всеми фильмами
    const filmId = params.get('id');
    // Если не нашли параметр id, то вернем пользователя на страницу со всеми фильмами, так как без него мы не сможем найти фильм
    if (filmId === null) {
        // Выводим предупреждение о том, что фильм не найден
        alert('Фильм не найден!');
        // Открываем в браузере страницу со списком всех фильмов
        window.open('xch.html');
    }
    else {
        // Подставляем полученный id фильма в ссылку на получение данных о конкретном фильме
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ filmId }`, {
            headers: {
                "Content-Type": 'application/json',
                "X-API-KEY": API_KEY,
            },
        });
        movie = response.data
        showTasks()
    }
}


function showTasks() {
    container.innerHTML = ''

    let movieCard = document.createElement('div')
    let movieAvatar = document.createElement('div')
    let movieName = document.createElement('h1')
    let moviePhone = document.createElement('p')
    let movieEmail = document.createElement('div')

    movieCard.classList.add('movie')

    movieAvatar.classList.add('movie__cover')

    movieName.classList.add('movie__title')

    moviePhone.classList.add('movie__description')

    movieEmail.classList.add('movie__value')


    movieAvatar.innerHTML = `<img src="${movie.posterUrlPreview}" alt="" class="movie__cover">`
    movieName.innerHTML = movie.nameRu
    // moviePhone.innerHTML = movie.shortDescription
    // movieEmail.innerHTML =`<b>Год производства</b> ${  movie.year }`
    // movieEmail.innerHTML =`<b>Страны</b> ${  movie.country }`
    // movieEmail.innerHTML =`<b>Жанры</b> ${  movie.genre }`
    // movieEmail.innerHTML =`<b>Время серии</b> ${  movie.year }`
    // movieEmail.innerHTML =`<b>Рейтинг Imdb</b> ${  movie.ratingImdb }`
    // movieEmail.innerHTML =`<b>Рейтинг Кинопоиск</b> ${  movie.ratingKinopoisk }`

    movieCard.append(movieAvatar)
    movieCard.append(movieName, moviePhone)
    // movieCard.append(movieEmail)

    container.append(movieCard)
}

getMovie()