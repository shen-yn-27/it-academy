let whiteButton = document.getElementById('white-button');
let blackButton = document.getElementById('black-button');
let greyButton = document.getElementById('grey-button');
let goldenButton = document.getElementById('golden-button');
let blueButton = document.getElementById('blue-button');

let minus10Button = document.getElementById('minus10');
let minus1Button = document.getElementById('minus1');
let plus1Button = document.getElementById('plus1');
let plus10Button = document.getElementById('plus10');
let total = document.getElementById('total');
let count = 0
let changeButton = document.getElementById('change');

let even = document.getElementById('even');
let three = document.getElementById('three');
let five = document.getElementById('five');
let seven = document.getElementById('seven');

let historyEven = document.getElementById('history-even');
let historyThree = document.getElementById('history-three');
let historyFive = document.getElementById('history-five');
let historySeven = document.getElementById('history-seven');
let history = document.getElementById('history')


function colorWhite() {
    document.body.style.background = "white";
    document.body.style.color = "black";
}

function colorGrey() {
    document.body.style.background = "grey";
    document.body.style.color = "black";
}

function colorGolden() {
    document.body.style.background = "goldenrod";
    document.body.style.color = "black";
}

function colorBlack() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function colorBlue() {
    document.body.style.background = "darkblue";
    document.body.style.color = "greenyellow";
}

blackButton.addEventListener('click',colorBlack )
whiteButton.addEventListener('click',colorWhite )
greyButton.addEventListener('click',colorGrey )
goldenButton.addEventListener('click',colorGolden )
blueButton.addEventListener('click',colorBlue )

function wee() {
    if (count % 3 === 0) {
        three.innerText = 'Да'
    }
    else  {
        three.innerText ='Нет'
    }
}

function ee() {
    if (count % 2 === 0) {
        even.innerText = 'Да'
    }
    else  {
        even.innerText ='Нет'
    }
}

function ww() {
    if (count % 7 === 0) {
        seven.innerText = 'Да'
    }
    else  {
        seven.innerText ='Нет'
    }
}

function w() {
    if (count % 5 === 0) {
        five.innerText = 'Да'
    }
    else  {
        five.innerText ='Нет'
    }
}

function f1() {
    if (count % 2 === 0 ) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count % 3 === 0 ) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count % 5 === 0 ) {
        historyFive.innerText = historyFive.innerText + ' ' + count
    }
    if (count % 7 === 0 ) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
    if ( count % 2 !== 0 && count % 3 !== 0 && count % 5 !== 0 && count % 7 !== 0) {
        history.innerText = history.innerText + ' ' + count
    }
}


function c() {
   count = count - 10;
   total.innerText = count
    wee()
    ee()
    ww()
    w()
    f1()
}

function v() {
    count = count - 1;
    total.innerText = count
    wee()
    ee()
    ww()
    w()
    f1()
}

function b() {
    count= +count + 1;
    total.innerText = count
    wee()
    ee()
    ww()
    w()
    f1()
}

function n() {
    count= +count + 10;
    total.innerText = count
    wee()
    ee()
    ww()
    w()
    f1()
}

minus10Button.addEventListener('click',c )
minus1Button.addEventListener('click',v)
plus1Button.addEventListener('click',b)
plus10Button.addEventListener('click',n)

function f() {
    count = +prompt("УКАЖИ ЧИСЛО")
    total.innerText = count

    wee()
    ee()
    ww()
    w()
    f1()
}
changeButton.addEventListener('click', f)
