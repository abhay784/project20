var car,wall;
var speed,weight;
function setup() {
  height = 400;
  createCanvas(1600,height);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60, height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;


}

function draw() {
  background(200,200,200);
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;
  if( deformation<100){
    car.shapeColor = "green";
    
  }  
  if( deformation<180 && deformation > 100){
    car.shapeColor = "yellow";
    
  }  
  if( deformation>180){
    car.shapeColor = "red";
    
  } 
} 
  
  drawSprites();
}
