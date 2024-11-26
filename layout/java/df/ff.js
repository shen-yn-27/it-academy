function c () {
    let span = document.getElementById('q')
    let text = span.innerText
    if (text !== 'ТЕКСТ') {
        span.innerText = 'ТЕКСТ'
    }
    else if (text !== 'ИЗМЕНИТЬ ТЕКСТ') {
        span.innerText = 'ИЗМЕНИТЬ ТЕКСТ'
    }
}

let s = document.getElementById('S')

s.addEventListener('click', c )