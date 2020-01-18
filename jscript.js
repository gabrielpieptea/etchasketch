
const container = document.getElementById('container');
let n = 12;

//grid
function makeRows(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c=0; c< (rows*cols); c++){
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', function (event){
      event.target.style.backgroundColor = 'red';
    });
    container.appendChild(cell).className = "grid-item";
  }
}
makeRows(n,n);

//clear container function
  function clearBox(elementID){
    document.getElementById(elementID).innerHTML = '';
    n = prompt("Enter n: ");
    if(isNaN(n)){
      alert('Please enter a number');
      n = prompt("Enter n: ");

    }
    makeRows(n,n);
  }

//reset button
const gridButton = document.createElement('button');
gridButton.innerText = 'RESET GRID';
gridButton.addEventListener('click', e => clearBox('container'));
gridButton.setAttribute("id", "gridButton");
document.body.appendChild(gridButton);

//not done
//rgb gridButton
const rgbButton = document.createElement('button');
rgbButton.innerText = 'Random Color Generator';
//rgbButton.addEventListener('click', e => chooseColor());
rgbButton.setAttribute('id', 'gridButton');
//document.body.appendChild(rgbButton);

//random rgb function
function rgbcolor(){
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// test area
