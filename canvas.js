var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')


// shapes-----------

// square
// c.fillStyle = "red"
// c.fillRect(100, 100, 100, 100)
// // line
// c.beginPath()
// c.moveTo(50,300)
// c.lineTo(300,100)
// c.strokeStyle = "blue"
// c.stroke()
//
// // arcs/circles
// c.strokeStyle = "black"
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.stroke()

//------

//Animate------
//
// function draw() {
//   c.fillStyle = "red"
//   c.fillRect(x, 100, 100, 100)
//
// }
//
// var x = 100
//
// function goRight() {
//   x += 1
// draw()
// }
//
// function animate() {
//   requestAnimationFrame(animate)
//   c.clearRect(0, 0, innerWidth, innerHeight)
//   goRight()
// }
//
// animate()
//-----

//lots of squares-------
// function Square(x, y, size, hue) {
//   this.x = x
//   this.y = y
//   this.size = size
//   this.hue = hue
//
//   this.draw = function() {
//   c.fillStyle = this.hue
//   c.fillRect(this.x, this.y, this.size + 1, this.size + 1)
//   }
//
//   this.draw()
// }
//
//
//
//
// var square = []
//
// function init(){
//   square = [];
//   for(var i = 0; i < 10; i++){
//     var size = 50
//     var x = Math.random() * canvas.width
//     var y = Math.random() * canvas.height
//     var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
//     square.push(new Square(x, y, size, hue))
//   }
// }
// init()
//----

// Circles moving background----------
function Circle(x, y, dx, dy, radius, hue){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.hue = hue;
  this.minRadius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.hue;
    c.stroke();
    c.fill();
    c.fillStyle = this.hue;
  }

  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}

var circleArray = [];


function init(){
  circleArray = [];
  for (var i = 0; i < 15; i++){
    var radius = 20;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 100;
    var dy = (Math.random() - 0.5) * 100;
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    circleArray.push(new Circle(x, y, dx, dy, radius, hue));
  }
}

  function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
}

init();
animate();
