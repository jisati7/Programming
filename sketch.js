var corn=0
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(222,222,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(corn,corn,20,20);
  ellipse (width/2,height/2,20,20)
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hello",40,40);
}



function mousePressed () {
	corn=corn+5
}
	   
