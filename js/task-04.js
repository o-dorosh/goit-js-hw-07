const ref = { 
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]')
}

let counterValue = Number(ref.valueEl.textContent)

ref.decrementBtn.addEventListener('click', onDecreaseValue);

function onDecreaseValue() {
    counterValue -= 1;
    ref.valueEl.textContent = counterValue;
};

ref.incrementBtn.addEventListener('click', onIncreaseValue);

function onIncreaseValue() {
    counterValue += 1;
    ref.valueEl.textContent = counterValue;
};