function Cell(
  // if arguments are defined, use them. Else create default values
  pos = createVector(random(width), random(height)),
  r = 60,
  c = color(random(100, 255), 0, random(100, 255), 150)
  ) {

  this.pos = pos;
  this.r = r; 
  this.c = c;
  
  // if user clicks on cell return true, else false
  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    return (d < this.r);
  }

  // make a new cell
  this.mitosis = function() {
    this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos.copy(), this.r*0.5, this.c);
    return cell;
  }

   this.move  = function(){
    var vel = p5.Vector.random2D();


    for(c in cells){
      // keep cells from overlapping
      var c = cells[c];
      if(this === c) continue;  // if comparing the same cell to itself, skip

      var d = dist(this.pos.x, this.pos.y, c.pos.x, c.pos.y);
      if(d < this.r + c.r){                                                           // OVERLAPPING!!!
        while(d > dist(this.pos.x + vel.x, this.pos.y + vel.y, c.pos.x, c.pos.y)){
            var vel = p5.Vector.random2D();
        }
        vel.x *= 3;
        vel.y *= 3;
        break;
      }

      // stay away from edges
      if(this.pos.x < 0 + this.r) {
        while(d > dist(this.pos.x + vel.x, this.pos.y + vel.y, c.pos.x, c.pos.y)){
            var vel = p5.Vector.random2D();
        }
        vel.x *= -3;
        break;
      }

      if(this.pos.y < 0 + this.r) {
        while(d > dist(this.pos.x + vel.x, this.pos.y + vel.y, c.pos.x, c.pos.y)){
            var vel = p5.Vector.random2D();
        }
        vel.y *= -3;
        break;
      }

      if(this.pos.x > width - this.r) {
        while(d < dist(this.pos.x + vel.x, this.pos.y + vel.y, c.pos.x, c.pos.y)){
            var vel = p5.Vector.random2D();
        }
        vel.x *= 3;
        break;
      }

      if(this.pos.y > height - this.r) {
        while(d < dist(this.pos.x + vel.x, this.pos.y + vel.y, c.pos.x, c.pos.y)){
            var vel = p5.Vector.random2D();
        }
        vel.y *= 3;
        break;
      }
    } 
    this.pos.add(vel);
  }
  
  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.grow = function() {
    if (this.r < 100) {
      this.r += 0.1;
    } else {
      this.c = color(random(100, 255) + this.r, 0, random(100, 255), 150); // DANGER! Almost cancerous!
      this.r += random(-1, 1);
    }
  }
}