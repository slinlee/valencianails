let tri1 = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x3: 0,
  y3: 0
}

let tri2 = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x3: 0,
  y3: 0
}

let col1 = {
  r: 0,
  g: 0,
  b: 0
}

let col2 = {
  r: 0,
  g: 0,
  b: 0
}

let size = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  seedTri(tri1);
  seedTri(tri2);
}

function draw() {
  size = map(mouseY + random(10, 30), 0, height, 10, 90);
  col1.r = map(mouseX + random(-70, 70), 0, width, 0, 255);
  col1.g = map(mouseX + random(-70, 70), 0, width, 200, 0);
  col1.b = random(0, 180);

  col2.r = map(mouseX + random(-70, 70), 0, width, 255, 0);
  col2.g = map(mouseX + random(-70, 70), 0, width, 0, 200);
  col2.b = random(0, 180);

  // background(map(mouseX, 0, width, 0, 255));
  background(255);
  nextTri(tri1);
  nextTri(tri2)
  noStroke();
  fill(col1.r, col1.g, col1.b, 80);
  triangle(tri1.x1, tri1.y1, tri1.x2, tri1.y2, tri1.x3, tri1.y3);

  fill(col2.r, col2.g, col2.b, 80);

  triangle(tri2.x1, tri2.y1, tri2.x2, tri2.y2, tri2.x3, tri2.y3);
}

function mouseClicked() {
  background(255);
  seedTri(tri1);
  seedTri(tri2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function seedTri(tri) {
  // tri.x1 = random(0, width);
  // tri.y1 = random(0, height);
  tri.x1 = width/2;
  tri.y1 = height/2;
  tri.x2 = nextX(tri.x1);
  tri.y2 = nextY(tri.y1);
  tri.x3 = nextX(tri.x1);
  tri.y3 = nextY(tri.y1);
}

function nextTri(tri) {
  let corner = Math.floor(random(1,3));

  if(corner === 1) {
    do {

    } while (tri.x2 > width || tri.x2 < 0);
    tri.x2 = nextX(tri.x1);
    tri.y2 = nextY(tri.y1);
    tri.x3 = nextX(tri.x1);
    tri.y3 = nextY(tri.y1);
  } else if (corner === 2) {
    tri.x1 = nextX(tri.x2);
    tri.y1 = nextY(tri.y2);
    tri.x3 = nextX(tri.x2);
    tri.y3 = nextY(tri.y2);
  } else {
    tri.x2 = nextX(tri.x3);
    tri.y2 = nextY(tri.y3);
    tri.x1 = nextX(tri.x3);
    tri.y1 = nextY(tri.y3);
  }
}

function nextX(x) {
  let newX = x + random(-size, size);
  if (newX > width || newX < 0) {
    return nextX(x);
  } else {
    return newX;
  }
}

function nextY(y) {
  let newY = y + random(-size, size);
  if (newY > height || newY < 0) {
    return nextY(y);
  } else {
    return newY;
  }
}