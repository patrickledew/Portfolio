import P5 from "p5";

interface Boid {
  x: number;
  y: number;
  velX: number;
  velY: number;
  id: number;
}

interface BoidsState {
  boids: Boid[];
}

interface BoidsOptions {
  NUM_BOIDS: number

  BOID_WIDTH: number
  BOID_LENGTH: number

  SEP_DIST: number
  SEP_STRENGTH: number
  GROUP_DIST: number
  GROUP_STRENGTH: number
  ALIGN_DIST: number
  ALIGN_STRENGTH: number
  MOUSE_DIST: number
  MOUSE_STRENGTH: number
  SPEED: number
}

const state: BoidsState = {
  boids: [],
};

const opts: BoidsOptions = {
  NUM_BOIDS: 100,

  BOID_WIDTH:  20,
  BOID_LENGTH:  20,

  SEP_DIST:  100,
  SEP_STRENGTH:  5,
  GROUP_DIST:  200,
  GROUP_STRENGTH:  2,
  ALIGN_DIST:  100,
  ALIGN_STRENGTH:  5,
  MOUSE_DIST:  500,
  MOUSE_STRENGTH:  0.5,
  SPEED:  4,
}
export default (container: Element): ((p5: P5) => void) => {
  container = container;
  console.log(`Creating sketch. Boids count: ${state.boids.length}`);
  return (p5: P5) => {
    sketch(p5, container);
  }
};

const sketch = (p5: P5, container: Element) => {
  let width = 1000;
  let height = 1000;

  p5.setup = () => {
    width = container.clientWidth;
    height = container.clientWidth;
    p5.createCanvas(width, height).parent(container);
    p5.frameRate(60);
    scatterBoids();
  };

  p5.draw = () => {
    p5.background(10, 10, 10, 70);

    thinkBoids(p5);
    moveBoids();
    drawBoids(p5);

    if (!p5.isLooping()) {
      p5.noLoop();
    } else {
      p5.loop();
    }
  };

  p5.windowResized = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    p5.resizeCanvas(width, height);
    p5.clear();
  };


  //// boids specific stuff here

  const thinkBoids = (p5: P5) => {
    state.boids.forEach((b) => {
      const angle = Math.atan2(b.velX, b.velY);

      state.boids
      .filter((n) => n.id != b.id)
      .forEach((n) => {
	const otherAngle = Math.atan2(n.velX, n.velY);
	const to = [b.x - n.x, b.y - n.y];
	const dist = mag(to[0], to[1]);
	if (dist < opts.SEP_DIST) {
	  const separateVec = [0, 0];
	  const dist = mag(to[0], to[1]);
	  separateVec[0] = to[0] / Math.pow(dist, 2);
	  separateVec[1] = to[1] / Math.pow(dist, 2);
	  b.velX += separateVec[0] * opts.SEP_STRENGTH;
	  b.velY += separateVec[1] * opts.SEP_STRENGTH;
	  norm(b);
	}
	if (dist < opts.GROUP_DIST) {
	  const groupVec = [0, 0];
	  groupVec[0] = (-to[0] * 0.5) / Math.pow(dist, 2);
	  groupVec[1] = (-to[1] * 0.5) / Math.pow(dist, 2);
	  b.velX += groupVec[0] * opts.GROUP_STRENGTH;
	  b.velY += groupVec[1] * opts.GROUP_STRENGTH;
	  norm(b);
	}

	if (dist < opts.ALIGN_DIST) {
	  const angleDiff = angle - otherAngle;

	  b.velX +=
	    (Math.sin(angleDiff) / Math.pow(dist, 3)) * opts.ALIGN_STRENGTH;
	  b.velY +=
	    (Math.sin(angleDiff) / Math.pow(dist, 3)) * opts.ALIGN_STRENGTH;
	}
	// p5?.fill("red");
	// p5?.circle(n.x, n.y, 2);
      });

      const mousePos = [p5.mouseX, p5.mouseY];
      const toMouse = [b.x - mousePos[0], b.y - mousePos[1]];
      const distToMouse = mag(toMouse[0], toMouse[1]);
      if (distToMouse < opts.MOUSE_DIST) {
	let repel = -1;
	if (p5.mouseIsPressed) repel = 1;
	const mouseVec = [0, 0];
	mouseVec[0] = (repel * toMouse[0] * 0.5) / Math.pow(distToMouse, 1);
	mouseVec[1] = (repel * toMouse[1] * 0.5) / Math.pow(distToMouse, 1);
	b.velX += mouseVec[0] * opts.MOUSE_STRENGTH;
	b.velY += mouseVec[1] * opts.MOUSE_STRENGTH;
	norm(b);
      }
      norm(b);
    });
  };

  const mag = (x: number, y: number) => Math.sqrt(x * x + y * y);

  const norm = (b: Boid) => {
    const mag = Math.sqrt(b.velX * b.velX + b.velY * b.velY);
    b.velX = (b.velX / mag) * opts.SPEED;
    b.velY = (b.velY / mag) * opts.SPEED;
  };

  const moveBoids = () => {
    state.boids.forEach((b) => {
      b.x = (b.velX + b.x) % width;
      b.y = (b.velY + b.y) % height;
      if (b.x < 0) b.x = width - b.x;
      if (b.y < 0) b.y = height - b.y;
    });
  };

  const drawBoids = (p5: P5) => {
    state.boids.forEach((b) => {
      p5.strokeWeight(0);
      p5.colorMode(p5.HSL, 255);
      const t = Date.now();

      const base_hue = 190;
      const hue_var = 20;
      const hue_rate = 0.001;

      const base_bright = 150;
      const bright_var = 100;
      const bright_rate = 0.002;
      p5.fill(
	// (b.id * 0.5 + t * 0.01) % 255,
	base_hue + Math.sin(t * hue_rate) * hue_var,
	60,
	base_bright + Math.cos(t * bright_rate + b.id) * bright_var
      );
      p5.colorMode(p5.RGB);
      const angle = Math.atan2(b.velX, b.velY);
      const tip = [
	b.x + Math.sin(angle) * opts.BOID_LENGTH,
	b.y + Math.cos(angle) * opts.BOID_LENGTH,
      ];
      const left = [
	b.x + (Math.cos(angle) * opts.BOID_WIDTH) / 2,
	b.y - (Math.sin(angle) * opts.BOID_WIDTH) / 2,
      ];
      const right = [
	b.x - (Math.cos(angle) * opts.BOID_WIDTH) / 2,
	b.y + (Math.sin(angle) * opts.BOID_WIDTH) / 2,
      ];
      p5.triangle(tip[0], tip[1], left[0], left[1], right[0], right[1]);
    });
  };

  const createRandomlyPlacedBoid = (id: number) => {
    const boid: Boid = {
      x: Math.random() * width,
      y: Math.random() * height,
      velX: 0,
      velY: 0,
      id: id,
    };
    state.boids.push(boid);
  };
  const scatterBoids = () => {
    state.boids = []
    for (let i = 0; i < opts.NUM_BOIDS; i++) {
      createRandomlyPlacedBoid(i);
    }
  };
};
