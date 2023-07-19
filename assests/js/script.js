// Dom objectes
const colorChoice = document.getElementById('colorChoice');
const colorMode   = document.getElementById('colorMode');
const EraserMode   = document.getElementById('EraserMode');
const reset   = document.getElementById('reset');
const rangeDiv   = document.getElementById('rangeDiv');
const sizeRange   = document.getElementById('sizeRange');
const sizeSelector   = document.getElementById('sizeSelector');
const gridField   = document.getElementById('gridField');

//defaults
const default_color = '#000';
const default_mode  = 'color';
const default_grid_size = 10;

let current_color = default_color;
let current_mode = default_mode;
let current_grid = default_grid_size;

const setCurrentColor = newColor => current_color=newColor;
const setCurrentMode  = newMode => current_mode=newMode;
const setCurrentGridSize = newGridSize => current_grid=newGridSize;

const resetSketch = ()=>{
    flushGrid();
    setupGrid(default_grid_size);
}
const flushGrid=()=>gridField.innerHTML='';


colorChoice.oninput = e => setCurrentColor(e.target.value);
colorMode.addEventListener('click', ()=> setCurrentMode('color'));
EraserMode.addEventListener('click', ()=> setCurrentMode('erase'));
reset.addEventListener('click', ()=> resetSketch());
sizeSelector.onmousemove = e => updateSizeValue(e.target.value); 
sizeSelector.onchange = e => changeSize(e.target.value);

const changeSize =value=>{
    setCurrentGridSize(value)
    updateSizeValue(value)
    resetSketch();
}
const updateSizeValue=value=>sizeRange.innerHTML = value;

const setupGrid=(size)=>{
    gridField.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridField.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      gridField.appendChild(gridElement)
    }
  }

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (current_mode === 'color') {
      e.target.style.backgroundColor = current_color
    } else if (current_mode === 'erase') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

  function activateButton(newMode) {
    if (current_mode == 'color') {
        colorMode.classList.add('active')
    } else if (current_mode == 'erase') {
        EraserMode.classList.add('active')
    }
  
    if (newMode === 'color') {
        colorMode.classList.add('active')
    } else if (newMode === 'erase') {
        EraserMode.classList.add('active')
    }
  }
  
  window.onload = () => {
    setupGrid(default_grid_size)
    activateButton(default_color)
  }