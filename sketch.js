function setup(){
createCanvas(windowWidth, windowHeight);
background (0, 0, 255);


}


function draw (){

//variables
var r=0;
var g=242;
var b=255;

var r2=255;
var g2=0;
var b2=60;

var r3=255;
var g3=48;
var b3=231;

for (var i = 0; i < 10000; i=i+30){
    print(i);
    circle(i, 10000, 100);

    fill (r,g,b);
    circle(random(i), random(i), random(20));
    circle(random(i), random(i), random(30));
    circle(random(i), random(i), random(30));

    fill (r2,g2,b2);
    circle(random(i), random(i), random(20));
    circle(random(i), random(i), random(30));
    
    fill (r3,g3,b3);
    circle(random(i), random(i), random(20));
    circle(random(i), random(i), random(30));
}
  


}