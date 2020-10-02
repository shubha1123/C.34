//Create variables here
var dog
var happydog
var database,foodS,foodStock
var foodS
var foodStock
function preload()
{
loadImage("dogImg.png")	;
loadImage("dogImg1.png")	;
}

function setup() {
	createCanvas(500, 500);
  createSprites(200,200,20,30);
  addImage('dogImg.png');
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(up_Arrow)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  
}