var car,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(800,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(120,100);
  weight=random(400,1500);

 car =  createSprite(50,200,50,10);
 
 wall = createSprite(750,200,60,120);
 wall.shapeColor =  ("grey")
}


function draw() {
  background(80,80,80);  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = color("red");
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color("green");
      }
    } 
  drawSprites();
}