// Init Materalize JS Components
M.AutoInit();

let p;

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);

  p = new Particle();

  canvas.parent("home");
}

function draw() {
  background(55, 100, 144);
  p.update();
  p.draw();
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = 10;
  }

  update() {
    this.pos.add(this.vel);
    this.detectEdges();
  }

  draw() {
    noStroke();
    fill("rgba(0, 0, 0, 0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }

  detectEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}
