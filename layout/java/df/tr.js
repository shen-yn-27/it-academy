let d1 = document.getElementById('d1')

let span1 = document.getElementById('span1')

let span2 = document.getElementById('span2')

let d2 = document.getElementById('d2')

let we = document.getElementById('we')

let qw = document.getElementById('qw')

let q = document.getElementById('q')

function f() {
    span1.innerText = d1.value
}

function e() {
    span2.innerText = d2.value
}

function re() {
    span1.innerText = ''
    span2.innerText = ''
    d1.value = ''
    d2.value = ''
}

we.addEventListener('click', f)
qw.addEventListener('click', e)
q.addEventListener('click', re)


