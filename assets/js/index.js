// Init Materalize JS Components
M.AutoInit();

let p;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);

  p = new Particle();

  canvas.parent("home");
}

function draw() {
  p.draw();
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.size = 10;
  }

  draw() {
    noStroke();
    fill("rgba(0, 0, 0, 0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }
}
