let input = document.getElementById("input");

function appendValue(value) {
    input.value = input.value + value;
}

function compute() {
    input.value = eval('50+2');
}