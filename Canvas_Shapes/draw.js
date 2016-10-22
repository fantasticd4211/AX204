console.log("Christian is Dumb")

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle ="pink";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(100,100,80,0,6.28);
ctx3.strokeStyle = "blue";
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "blue";
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.strokeStyle = "red";
ctx4.moveTo(0,0);
ctx4.lineTo(150,150);
ctx4.lineTo(0,150);
ctx4.closePath();
ctx4.stroke();
ctx4.moveTo(300,0);
ctx4.lineTo(150,150);
ctx4.lineTo(150,0);
ctx4.closePath();
ctx4.stroke();
ctx4.moveTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(150,150);
ctx4.closePath();
ctx4.stroke();
ctx4.moveTo(0,300);
ctx4.lineTo(150,150);
ctx4.lineTo(150,300);
ctx4.closePath();
ctx4.stroke();

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext('2d');
//Sky and Land
ctx5.fillStyle = "green";
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
// THE SUN
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28)
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow";
ctx5.fill();
//Road
ctx5.beginPath();
ctx5.moveTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.lineTo(300,500);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey";
ctx5.fill();
//RoadlIne
ctx5.beginPath();
ctx5.moveTo(375,350);
ctx5.lineTo(375,500);
ctx5.closePath();
ctx5.stroke();
//Building Juan
ctx5.beginPath();
ctx5.moveTo(100,250);
ctx5.lineTo(300,250);
ctx5.lineTo(300,350);
ctx5.lineTo(100,350);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey";
ctx5.fill();
//Juan's Windows
ctx5.clearRect(125,275,20,20);
ctx5.clearRect(175,275,20,20);
ctx5.clearRect(200,275,20,20);
ctx5.clearRect(225,275,20,20);
ctx5.clearRect(125,300,20,20);
ctx5.clearRect(125,325,20,20);
ctx5.clearRect(200,300,20,20);
ctx5.clearRect(200,325,20,20);
