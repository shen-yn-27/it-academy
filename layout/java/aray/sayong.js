//Масивы в JvaScript
let users = [ 'Иван', 'Павел', 'Анна' ]

//получение элемента из масива
//массив[индекс элемента]
//индекс порядковый номер начиная с нуля
console.log(users[1])

//длина массива (количесвто элементов)
//массив.length
console.log('Кол-во пользователей:', users.length)

//Добавление элемента массива
users.push('Дмитрий')

//удаление элемента из конца массива
users.pop()

//добавление элемента массива в начало
users.unshift('Босс')

//Удаление элемента массива из начала
users.shift()

//Удаление элемента по индексу
//slice(индекс для удаления, кол-во элементов)
//users.splice(1,2)

console.log(users, users.length)

//Объекты в JavaScript

users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    },
]

//Получение значения объекта  по его ключу
let  firstUser = users[0]

console.log('Первый пользователь:', firstUser)
console.log('Имя пользователя:', firstUser, firstUser['name'])

//Задать новое свойство объекта
firstUser['likes birds'] = true
firstUser['phone'] = '+7 (111) 011-00-01'

//Удалить свойство объекта
delete firstUser['likes birds']

console.log(users)

let usersList = document.getElementById('users-list')

//Функция для вывода на экран
function showUsers() {
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

    userAvatar.innerHTML = `<img src="${firstUser.avatar}" alt="">`

    userName.innerHTML = firstUser.name
    userPhone.innerHTML =`<b>Телефон:</b> ${firstUser.phone} `
    userEmail.innerHTML =`'<b>Email:</b> ${firstUser.email} `
    userBirthday.innerHTML =`<b>Дата рождения:</b> ${firstUser.birthday} `

    userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday)


    //Поместить карточку пользователя в конец списка
    usersList.append(userCard)
}

showUsers()