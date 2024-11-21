//Вывод информации в консоль
console.log('Hello dokja');

//1. Переменные 
let name = 'Luka'
console.log('Имя пользователя:', name)

name = 'Luka_49_51'
console.log('Имя пользователя:', name )

//Константы
const age = 30
console.log('Возраст пользователя:', age  )

//2. Типы данных
let num= 12 //Целое число 
let num2 = 12.11 // Десятичное число
let string =  'Строка' // Строка
let bool = true // Булевой тип (true/false)
let empty = null //Пустота (None в Pythone)
let undef = undefined //Значение не задано
console.log(undef)

//3. Преобразование типов данных
let strToNum = +'12' // Number (12) -второй варинт
console.log(strToNum + 12)

//Преобразование числа в строку
let NumToStr = String(12)
console.log(NumToStr + 12)

//4. Математические операции
console.log(2 + 2) // Сложение
console.log(2 - 2) // Вычитание
console.log(2 * 2) //Умножение
console.log(2 / 2) //Деление
console.log(2 % 2) //Остаток от деления
console.log(2 ** 2) //Возведение в стопень

// 5. Взаимодействие с пользователем
alert('49%...........')

let userName = prompt('Ваше текушее имя')
alert('Вас зовут ' + userName)

let isUserNameConfirm = confirm('Вы уверены, что вас зовут ' + userName + '?')

//6. Условия
let userAge = prompt('Сколько вам лет?')

// Получение элемента по id
let pageTitle = document.getElementById ( 'title' )
console.log(pageTitle)

if (userAge > 10) {
    alert('Добро пожаловать в сценарии!!')
    // Изменеям текст для элемента на html-странице
    pageTitle.innerText = 'Добро пожаловать в сценарии!! Ваш сценарий определяется..'
}
else {
    alert('Тебе не избежать сценариев.. Добро пожаловать!!!')
    // Изменеям текст для элемента на html-странице
    pageTitle.innerText = 'Добро пожаловать в сценарии!! Ваш сценарий будет определён позже'
}