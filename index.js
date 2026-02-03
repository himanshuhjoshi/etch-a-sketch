const sketchPad = document.querySelector(".sketch-board");


// make the sketch board
for(let i=0; i< 16 * 16; i++){
    const div = document.createElement('div');
    div.classList += "block";
    sketchPad.appendChild(div);
}

const blocks = document.querySelectorAll('.block');


blocks.forEach(block => block.addEventListener("mouseover", () => {
    block.classList.add("sketch");
}));