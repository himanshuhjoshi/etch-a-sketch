'use strict'

const gridSize = document.querySelector('#grid-size');
const container = document.querySelector('.container');

const DEFAULT_GRID_SIZE = 16;
createGrid(DEFAULT_GRID_SIZE);
sketch();

gridSize.addEventListener('click', () => {
    container.innerHTML='';
    const userGridSize = Number(prompt("What's the grid size?")) || GRID_SIZE;
    createGrid(userGridSize);
    sketch();
})

function createGrid(gridSize){
    const boxSize = `${100 / gridSize}%`;
    const totalGridSize = Math.pow(gridSize, 2);
    for(let i=0; i<totalGridSize; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-box');
        gridDiv.style.height = boxSize;
        gridDiv.style.width = boxSize;
        container.appendChild(gridDiv);
    }
}

function sketch(){
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) => {
            let targetOpacity = Number(event.target.style.opacity);
            event.target.classList.add('grid-box-hover');
            // generating random colors
            // const red = Math.floor(Math.random() * 255) + 1;
            // const blue = Math.floor(Math.random() * 255) + 1;
            // const green = Math.floor(Math.random() * 255) + 1;
            // event.target.style.backgroundColor = `rgb(${red},${blue},${green})`;
            event.target.style.opacity = targetOpacity<1 && targetOpacity + 0.1;
        })
    })
}