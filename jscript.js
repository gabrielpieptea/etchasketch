const container = document.getElementById('container');
const containerCopy=document.getElementById('container');

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

makeRows(10,10);


//button
const gridButton = document.createElement('button');
gridButton.innerText = 'TEST ME';
gridButton.addEventListener('click', e => new makeRows(10,10));
gridButton.setAttribute("id", "gridButton");
document.body.appendChild(gridButton);
