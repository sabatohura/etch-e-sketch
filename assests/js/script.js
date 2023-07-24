const default_grid_size = 10;
const default_color = 'blue';
const board = document.getElementById('board');


const setColor = value => board.style.backgroundColor = value;



function changeColor(e) {
  e.target.style.backgroundColor = e
  console.log(e)
}

function resetGrid()
{
  updateSizeValue(default_grid_size)
  changeSize(default_grid_size)
  sizeSelector.value(default_grid_size)
}

window.onload =()=>{
  setColor(default_color);
}