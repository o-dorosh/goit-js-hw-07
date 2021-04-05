const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput() {
    const inp = input.value.trim().length;
    if (inp === 0) {
        span.textContent = 'незнакомец';
    } else {
        span.textContent = input.value;
    }
};
