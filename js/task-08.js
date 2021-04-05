const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const contBox = document.querySelector('#boxes'); 
const input = document.querySelector('input');

renderBtn.addEventListener('click', onAddBoxes);

function onAddBoxes (e) {
    const boxes = createBoxes (+input.value);
    console.log(boxes);
    contBox.innerHTML = boxes;
};

function createBoxes(amount) {
    let els = '';

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    for(let i = 0; i <= amount; i++) {
        let color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
        els = els + `<div style="background-color: ${color}; width: ${30+i*10}px; height: ${30+i*10}px"></div>`;
    }

    return els
}
 
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    contBox.innerHTML = '';
};