function createColorPalette(QTD) {
  let color = ['#000000', '#3CB371', '#A0522D', '#4B0082', '#8B0000', '#FFE4B5', '#B0E0E6', '#FFA500', '#FF7F50', '#FFB6C1'];
  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < QTD; index += 1) {
    let divColorPalette = document.createElement('div');
    let divColor = color[index];
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = divColor;
    if (index === 0){
      divColorPalette.classList = 'color selected';
    }
    
    colorPalette.appendChild(divColorPalette);
    divColorPalette.addEventListener('click',checkSelected);   
  }
}

function createLines(lines) {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < lines; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'line';
    for (let index2 = 0; index2 < lines; index2 +=1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      createDiv.appendChild(pixel);
      pixel.addEventListener('click', pixelSelected);
    }

    pixelBoard.appendChild(createDiv);   
  }
}

function checkSelected(event){
  let colorPalette = document.querySelector('.selected');
  colorPalette.classList.remove('selected');
  event.target.classList.add('selected');
}

function pixelSelected(event){
  let colorPalette = document.querySelector('.selected');
  let pixelColor = document.querySelector('.pixel');
  event.target.style.backgroundColor = colorPalette.style.backgroundColor;
}

createColorPalette(4);
createLines(5);
