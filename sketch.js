var hr, mn, sc;
var scAngle, mnAngle, hrAngle;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  

  //Translate and rotate reference point
  translate(200,200);
  rotate(-90);

  //Assigning values to hour, minute, and second vars
  hr = hour();
  mn = minute();
  sc = second();

  //Mapping the relation between the value of the variable and the angle of rotation
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  //Drawing second hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //Drawing minute hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,95,0);
  pop();

  //Drawing hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();


  //Drawing the circles
  strokeWeight(10);
  noFill();

  /*second*/
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  /*minute*/
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  /*hour*/
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
}