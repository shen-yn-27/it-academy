function c () {
    let input = document.getElementById('er')

    let erText = input.value
    let rt = erText.substr(0, erText.length - 0)

    let div = document.getElementById('rt')

    div.innerText = rt
}
let re = document.getElementById('re')

re.addEventListener('click', c )