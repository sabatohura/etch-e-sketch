const colorChoice = document.getElementById('colorChoice');
const colorMode   = document.getElementById('colorMode');
const EraserMode   = document.getElementById('EraserMode');
const reset   = document.getElementById('reset');
const rangeDiv   = document.getElementById('rangeDiv');
const sizeRange   = document.getElementById('sizeRange');
const sizeSelector   = document.getElementById('sizeSelector');
const gridField   = document.getElementById('gridField');



const default_color = '#000';
const default_mode  = 'color';
const default_grid_size = 10;

let current_color = default_color;
let current_mode = default_mode;
let current_grid = default_grid_size;

const setCurrentColor = newColor => current_color=newColor;
const setCurrentMode  = newMode => current_mode=newMode;
const setCurrentGridSize = newGridSize => current_grid=newGridSize;


