var cells = [];

function setup() {
  createCanvas(700, 700);
  cells.push(new Cell()); // create a Cell & add it into the "cells" array
  cells.push(new Cell());
}

function draw() {
  background(200);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
    cells[i].grow();
  }
}

function mousePressed() {
  for (var i = cells.length-1; i >= 0; i--) {
    // environment can't handle more than 50 cells
    if (cells.length > 50) {
      if (cells[i].clicked(mouseX, mouseY)) {
      console.log("There are too many cells!");
      break;  // only one cell should split at a mouse click
      }
    } else {
      console.log(cells.length);
      if (cells[i].clicked(mouseX, mouseY)) {
        cells.push(cells[i].mitosis()); // add daughter cell
        cells.push(cells[i].mitosis()); // add daughter cell
        cells.splice(i, 1); // delete parent cell
        break;  // only one cell should split at a mouse click
      }
    }
  }
}