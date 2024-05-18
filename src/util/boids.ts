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
  paused: boolean;
}

export default (container: Element) => {
  const state: BoidsState = {
    boids: [],
    paused: false,
  };
  return (p5: P5) => {
    sketch(p5, container, state);
  };
};

const sketch = (p5: P5, container: Element, state: BoidsState) => {
  let width = 1000;
  let height = 1000;
  const NUM_BOIDS = 500;

  const BOID_WIDTH = 10;
  const BOID_LENGTH = 20;

  const SEP_DIST = 100;
  const SEP_STRENGTH = 5;
  const GROUP_DIST = 200;
  const GROUP_STRENGTH = 2; //1.5;
  const ALIGN_DIST = 100;
  const ALIGN_STRENGTH = 5;
  const MOUSE_DIST = 500;
  const MOUSE_STRENGTH = 0.5;
  const SPEED = 3;

  p5.setup = () => {
    width = container.clientWidth;
    height = container.clientWidth;

    p5.createCanvas(width, height).parent(container);

    scatterBoids();
  };

  p5.draw = () => {
    p5.background(20, 20, 20, 20);

    drawBoids(p5);
    thinkBoids(p5);
    moveBoids();

    if (!p5.isLooping()) {
      console.log("paused");
      p5.noLoop();
    } else {
      p5.loop();
    }
  };

  p5.windowResized = () => {
    console.log(`${width} ${height}`);
    if (container) {
      width = container.clientWidth * 2;
      height = container.clientHeight * 2;
    }
    console.log(`${width} ${height}`);

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
          if (dist < SEP_DIST) {
            const separateVec = [0, 0];
            const dist = mag(to[0], to[1]);
            separateVec[0] = to[0] / Math.pow(dist, 2);
            separateVec[1] = to[1] / Math.pow(dist, 2);
            b.velX += separateVec[0] * SEP_STRENGTH;
            b.velY += separateVec[1] * SEP_STRENGTH;
            norm(b);
          }
          if (dist < GROUP_DIST) {
            const groupVec = [0, 0];
            groupVec[0] = (-to[0] * 0.5) / Math.pow(dist, 2);
            groupVec[1] = (-to[1] * 0.5) / Math.pow(dist, 2);
            b.velX += groupVec[0] * GROUP_STRENGTH;
            b.velY += groupVec[1] * GROUP_STRENGTH;
            norm(b);
          }

          if (dist < ALIGN_DIST) {
            const angleDiff = angle - otherAngle;

            b.velX +=
              (Math.sin(angleDiff) / Math.pow(dist, 3)) * ALIGN_STRENGTH;
            b.velY +=
              (Math.sin(angleDiff) / Math.pow(dist, 3)) * ALIGN_STRENGTH;
          }
          // p5?.fill("red");
          // p5?.circle(n.x, n.y, 2);
        });

      const mousePos = [p5.mouseX, p5.mouseY];
      const toMouse = [b.x - mousePos[0], b.y - mousePos[1]];
      const distToMouse = mag(toMouse[0], toMouse[1]);
      if (distToMouse < MOUSE_DIST) {
        let repel = -1;
        if (p5.mouseIsPressed) repel = 1;
        const mouseVec = [0, 0];
        mouseVec[0] = (repel * toMouse[0] * 0.5) / Math.pow(distToMouse, 1);
        mouseVec[1] = (repel * toMouse[1] * 0.5) / Math.pow(distToMouse, 1);
        b.velX += mouseVec[0] * MOUSE_STRENGTH;
        b.velY += mouseVec[1] * MOUSE_STRENGTH;
        norm(b);
      }
      norm(b);
    });
  };

  const mag = (x: number, y: number) => Math.sqrt(x * x + y * y);

  const norm = (b: Boid) => {
    const mag = Math.sqrt(b.velX * b.velX + b.velY * b.velY);
    b.velX = (b.velX / mag) * SPEED;
    b.velY = (b.velY / mag) * SPEED;
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
      p5.fill(
        (b.id * 0.5 + t * 0.01) % 255,
        200 + Math.sin(t * 0.001) * 30,
        150 + Math.cos(t * 0.001) * 50
      );
      p5.colorMode(p5.RGB);
      const angle = Math.atan2(b.velX, b.velY);
      const tip = [
        b.x + Math.sin(angle) * BOID_LENGTH,
        b.y + Math.cos(angle) * BOID_LENGTH,
      ];
      const left = [
        b.x + (Math.cos(angle) * BOID_WIDTH) / 2,
        b.y - (Math.sin(angle) * BOID_WIDTH) / 2,
      ];
      const right = [
        b.x - (Math.cos(angle) * BOID_WIDTH) / 2,
        b.y + (Math.sin(angle) * BOID_WIDTH) / 2,
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
    for (let i = 0; i < NUM_BOIDS; i++) {
      createRandomlyPlacedBoid(i);
    }
  };
};
