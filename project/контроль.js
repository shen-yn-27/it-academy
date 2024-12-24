function qq() {
    document.getElementsByTagName("body")[0].style.background = 'white';
    document.getElementsByTagName("p")[0].style.color = 'black';
}

function ww() {
    document.getElementsByTagName("body")[0].style.background = 'black';
    document.getElementsByTagName("p")[0].style.color = 'white';
}

function ee() {
    document.getElementsByTagName("body")[0].style.background = 'gray';
    document.getElementsByTagName("p")[0].style.color = 'black';
}

function rr() {
    document.getElementsByTagName("body")[0].style.background = 'goldenrod';
    document.getElementsByTagName("p")[0].style.color = 'black';
}

function tt() {
    document.getElementsByTagName("body")[0].style.background = 'darkblue';
    document.getElementsByTagName("p")[0].style.color = 'yellowgreen';
}

let s = document.getElementById('s');

function c() {
    s.innerText= s.innerText - 10;
}

function v() {
    s.innerText= s.innerText - 1;
}

function b() {
    s.innerText= +s.innerText + 1;
}

function n() {
    s.innerText= +s.innerText + 10;
}