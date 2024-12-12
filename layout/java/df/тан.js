let we = document.getElementById('we')
let z = document.getElementById('z')
let x = document.getElementById('x')
let c = document.getElementById('c')
let d1 = document.getElementById('d1')
let r = document.getElementById('r')
let t = document.getElementById('t')
let q = document.getElementById('q')

function parallelepiped() {
    let block = prompt('Введите номер блока')

    if (block == '1') {
        z.innerText = d1.value
    }
    if (block == '2') {
        x.innerText = d1.value
    }
    if (block == '3') {
        c.innerText = d1.value
    }
}

function l() {
    t.innerText = z.innerText + x.innerText + c.innerText
}

function e() {
    z.innerText = ''
    x.innerText = ''
    c.innerText = ''
    t.innerText = ''
    d1.value = ''
}

r.addEventListener('click', l)
we.addEventListener('click', parallelepiped)
q.addEventListener('click', e)