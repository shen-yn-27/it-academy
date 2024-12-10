let z = document.getElementById('z')
let x = document.getElementById('x')
let c = document.getElementById('c')

let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')

let we = document.getElementById('we')
let qw = document.getElementById('qw')
let w = document.getElementById('w')

let q = document.getElementById('q')

function l() {
    z.innerText = d1.value
}

function e() {
    x.innerText = d2.value
}

function u() {
    c.innerText = d3.value
}

function n() {
    z.innerText = ''
    x.innerText = ''
    c.innerText = ''
    d1.value = ''
    d2.value = ''
    d3.value = ''
}

we.addEventListener('click', l)
qw.addEventListener('click', e)
w.addEventListener('click', u)
q.addEventListener('click', n)

