// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Init Materalize JS Components
M.AutoInit();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, { indicators: true, fullWidth: true });
});

// Particle System
const particles = [];

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("home");

  const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20);
  particles.forEach((p, i) => {
    p.update();
    p.drawParticle();
    p.checkParticles(particles.slice(i));
  });
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = 12;
  }

  update() {
    this.pos.add(this.vel);
    this.detectEdges();
  }

  drawParticle() {
    noStroke();
    fill("rgba(255, 255, 255, 0.5)");
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

  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 120) {
        const alpha = map(d, 0, 120, 0, 0.25);
        stroke(`rgba(255, 255, 255, ${alpha})`);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
