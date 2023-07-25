// defaults 
const default_grid_size = 10;
const default_color = '#000000';

let drawMode = false;
// DOM objects
const board = document.getElementById('board');
const sizeRange = document.getElementById("sizeRange")

// functions 
const setColor    = value => newColor=value;
const resetGrid   = () => window.onload();
const setGridSize = value => newSize = value;

sizeRange.innerHTML = newSize;

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
  drawMode = !drawMode;
  if(drawMode)
    {
      document.getElementById('colorMode').innerHTML = 'Color Mode on'
      draw()
    }
    else{
      drawMode=false;
    }
};

window.onload =()=>{
  board.innerHTML = '';
  setColor(default_color);
  setGridSize(default_grid_size);
}

