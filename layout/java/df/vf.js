function c () {
    let span = document.getElementById('q')
    let text = span.innerText
    if (text !== '😭') {
        span.innerText = '😭'
    }
    else if (text !== '🥰') {
        span.innerText = '🥰'
    }
}

let s = document.getElementById('S')

s.addEventListener('click', c )