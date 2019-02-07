var cells = [];
var contents = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  cells.push(new Cell(contents,createVector(random(width), random(height))));
}

function preload() {
  img = loadImage('assets/Interphase.png')
  contents.push(img)
  img = loadImage('assets/Prophase.png')
  contents.push(img)
  img = loadImage('assets/Metaphase.png')
  contents.push(img)
  img = loadImage('assets/Anaphase.png')
  contents.push(img)
  img = loadImage('assets/Telophase.png')
  contents.push(img)
}
 
function draw() {
  background(200);
  for(var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
    if(cells[i].isOverCell(mouseX, mouseY)) {
      //console.log("HOVERED")
      cells[i].showPhase();
    }
  }
}

function mouseClicked() {
  for(var i = 0; i < cells.length; i++) {
    if(cells[i].isOverCell(mouseX, mouseY)) {
      if (cells[i].stage == 4) {
        cells.push(new Cell(contents,createVector(cells[i].pos.x + random(-75,75), cells[i].pos.y + random(-75,75))))
      } 
      cells[i].changeState();

    }
  }
}

function mouseDragged() {
  for(var i = 0; i < cells.length; i++) {
    if(cells[i].isOverCell(mouseX, mouseY)) {
      //console.log("DRAGGED")
      cells[i].pos.x = mouseX
      cells[i].pos.y = mouseY
    }
  }
}
