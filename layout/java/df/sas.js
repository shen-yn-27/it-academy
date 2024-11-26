function c () {
    let placeholder = document.getElementById('er')
    let text = placeholder.value
    if (text !== '😭') {
        placeholder.value = '😭'
    }
    else if (text !== '🥰') {
        placeholder.value = '🥰'
    }
}

let d = document.getElementById('d')

d.addEventListener('click', c )