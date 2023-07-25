// defaults 
const default_grid_size = 10;
const default_color = '#000000';
// let drawMode = false;

// DOM objects
const board = document.getElementById('board');
const sizeRange = document.getElementById("sizeRange");
const colorModeBtn = document.getElementById('colorMode');

// functions 
const setColor    = value => newColor=value;
const resetGrid   = () => window.onload();
const onGridSizeChanged =(value)=>{
  resetGrid();
  setGridSize(value);
  setColorMode();
}
const setGridSize = value => {
  newSize = value;
  sizeRange.innerHTML = value;
}
const draw = () => {
  board.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`
  board.style.gridTemplateRows = `repeat(${newSize}, 1fr)`
  for (let i = 0; i < newSize * newSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    board.appendChild(gridElement)
  }
};

const changeColor = e => e.target.style.backgroundColor = newColor;

const setColorMode = () => { 
  draw()
};

const pauseColorMode = ()=> {
  setColor('not a color');
}
window.onload =()=>{
  board.innerHTML = '';
  drawMode = false;
  setColor(default_color);
  setGridSize(default_grid_size);
}

