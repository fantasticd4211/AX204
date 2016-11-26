//Declare all avriables at the top(scope)
var canvas;
var ctx;
//Start position and radius of player sprite
var x = 300;
var y = 300;
var r = 20;
//Holding the speed in the x and y directions
var mx = 0;
var my = 0;
//Positions of sprites
var bewmX;
var bewmY;
var starmieX;
var starmieY;
var spritewidth = 50;
var spriteheight = 50;
//Boolean to keep track of whether collision is occuring
var bewmCollision = false;
var starmieCollision= false;
//width and hight of canvas
var WIDTH = 600;
var HEIGHT = 600;
//Draws our circle

function circle(x,y,r){
  ctx.beginPath();
  ctx.arc(x,y,r,0,MATH.PI*2);
  ctx.closePath();
  ctx.fillStyle = "firebrick";
  ctx.fill();
  }

  //Wipes our canvas
  function clear ()  {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    }
//Import images as sprites
function drawStarmie(){
  ctx = document.getElementById('myCanvas').getContext('2d');
  var starmie = new Image();
  starmie.src = "The_Death_Star.png";
  ctx.drawImage(star,starmieX,starmieY,50,50);

  function drawBewm(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    var bewm = new Image();
    bewm.src = "kamikaze.png";
    ctx.drawImage(bewm,bewmX,bewmY,50,50);
}

//Init our animation (entery point)
function intit(){
  //Put our sprites into random Positions

  //wait for user to press keyboard(event)
  window.onkeydown = keydownControl;
  //Redraw our canvas every 10ms
  return setInterval(draw,10);
}
//draw function
function draw(){
  clear();
  circle(x,y,r);
  drawStarmie();
  drawBewm();
  //Tell our player sprite to bounce off the walls

  //Move our sprite
  x += mx; //means the same as x = x +mx
  y += my;

  //Checking for a collision-what happens if tehre is?
  collisionCheck();
  collisionhandle();
}
//Create my collisionCheck and handler
function collisionCheck(){

}
function collisionHandle(){

}

//Create a fucntion that changes mx and my depending on what key is pressed
function keydownControl(e){

}

//Ca;; our entery point function
init();
