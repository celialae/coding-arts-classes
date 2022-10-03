

class TurningRect {
  constructor () {
  
    this.sizeRect = random (0,windowWidth/4)
    this.xRect = -this.sizeRect/2
    this.yRect = -this.sizeRect/2
    this.angleRect = 0

  }
  showRect(){
    rotate (this.angleRect)
    strokeWeight (2);
    stroke (this.r,this.g,this.b)
    rect(this.xRect, this.yRect,this.sizeRect)
  }
  colourRect(){
    fill (200, 100, 50, random (0,5))
  }
  changeSizeRect(){
    this.sizeRect += random (-windowWidth,windowWidth) *0.01 
  }
  rotateRect(){
    this.angleRect += random (0,1) *0.0001
  }
}
class TurningLine {
  constructor() {
    this.x2 = windowWidth/random (-20,20)
    this.y2 = windowHeight/random (-20,20)
    this.r = 0
    this.g = 0
    this.b = 0
    this.a = 0
  }

  show(){
    rotate (this.a)
    strokeWeight (2);
    stroke (this.r,this.g,this.b)
    line(0,0,this.x2, this.y2)
  }
  
  colourChange(){
    this.r += 0.1 * sin(this.a)
    this.g += 2 * sin(this.a)
    this.b += 0.8
  }

  rotateLines(){
    this.a += random (0,1) * 0.0001
  }
}

let myTurningLines = []
let myTurningRects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  //frameRate(24)

  for (let i = 0; i < 100; i += 1){
    myTurningLines.push(new TurningLine())
    myTurningRects.push(new TurningRect())
    }
  }


function draw() {
  //background(220);
  translate (width/2, height/2)
  blendMode(SUBTRACT)

  for (let i = 0; i< myTurningLines.length; i += 1){
    
    

    
    myTurningLines[i].show()
    myTurningLines[i].colourChange()
    myTurningLines[i].rotateLines()

    myTurningRects[i].showRect()
    myTurningRects[i].changeSizeRect()
    myTurningRects[i].colourRect()
    myTurningRects[i].rotateRect()
    
    
    
    
  }
}
