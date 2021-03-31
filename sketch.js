var car,wall,car1
var speed,weight


function setup() {
  createCanvas(1600,400);

  speed = random(55,200)
  weight = random(400,1500)

  car = createSprite(50,200,50,50);

}

function draw() {
  background(255,255,255); 
  
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = color (80,80,80)

 car.velocityX = speed

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityx = 0;
    var deformation = 0.5 * weight * speed *speed/22509;

    if (deformation>100) {
      car.shapeColor = color("green");
    }

    if (deformation < 100 && deformation > 180) {
      car.shapeColor = color("yellow");
    }

    if (deformation<180) {
      car.shapeColor = color("red");
    }

    }
    if (car.isTouching(wall)){
      car.x = 1445
      car.y = 200
      
    }

    
    
  drawSprites();
}