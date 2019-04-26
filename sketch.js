let time = 0.0, moveX = 0.0, blue = 200.0, x = 0.0, y = 0.0
let sky = false
let bg = [195, 125, 100]

function setup() {
  createCanvas(640, 480)
  background(bg)
}

function draw() {
  time += 0.1
  moveX += PI
  translate(moveX, height / 2)
  y = map(noise(time), 0, 1, 0, 95)
  strokeWeight(5)
  stroke(50, 0, 200)
  line(0, 0, x, y)
  strokeWeight(random(0, 10))
  stroke(0, 175, 0)
  point(x, y)
  if(!sky) {
    strokeWeight(20)
    for(let x = 0; x < width; x += 15) {
      for(let y = 0; y < height; y += 10) {
        stroke(50, 0, blue)
        point(x, -y)
        blue -= 2.25
      }
      blue = 200
    }
  }
  sky = true
  if(moveX > width) {
    moveX = 0
    sky = false
    background(bg)
  }
}
