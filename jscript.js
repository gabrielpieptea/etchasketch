const container = document.getElementById('container');

let n = prompt("insert n");
//grid
function makeRows(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c=0; c< (rows*cols); c++){
    let cell = document.createElement('div');
    cell.innerText = c+1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(n,n);

/*
function draw() {
    document.getElementsByClassName("grid-item").style.background = 'red';
}

document.getElementsByClassName("grid-item").addEventListener('click', e => draw());
*/
//button
const gridButton = document.createElement('button');
gridButton.innerText = 'TEST ME';
gridButton.addEventListener('click', e=>alert("hi"));
gridButton.setAttribute("id", "gridButton");
document.body.appendChild(gridButton);



$(document).ready(function() {
        $('.container').click(function() {
            alert('ho ho ho');
        });
    });

/*
//test square properties
const square = document.createElement('div');
square.setAttribute("id", "square");
document.body.appendChild(square);
square.addEventListener('click', e=> (square.style.backgroundColor = 'red'));
// -----------//
*/
