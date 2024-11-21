let cf = document.getElementById('cf')

function color() {
    let body = document.body;
    let backgroundColor = body.style.backgroundColor;

    if (backgroundColor !=="red") {
        body.style.backgroundColor = 'red';
    }

    else if ( backgroundColor !== 'blue' ) {
        body.style.backgroundColor = 'blue'
    }
}

// button.textContent = ("click", color)

cf.addEventListener('click', color)