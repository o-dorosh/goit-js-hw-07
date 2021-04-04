const ref = { 
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]')
}

ref.decrementBtn.addEventListener('click', onDecreaseValue);

function onDecreaseValue() {
   return ref.valueEl.textContent = Number(ref.valueEl.textContent) - 1;
};

ref.incrementBtn.addEventListener('click', onIncreaseValue);

function onIncreaseValue() {
    return ref.valueEl.textContent = Number(ref.valueEl.textContent) + 1;
};