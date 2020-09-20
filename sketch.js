//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg1,dogImg2;



function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	var canvas = createCanvas(500,500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg1);
  dog.scale = 0.13;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogImg2);
  }
  drawSprites();
  //add styles here
  textSize(15);
  fill("blue");
  stroke("black");
  strokeWeight(4);
  text("NOTE: Press UP_ARROW to Feed MR.Sk8TeR Milk",75,70);
  text("Food Remaining : "+foodS,170,130);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
   if (x<=0) {
     x=0;
   } else {
     x=x-1;
   }
  database.ref('/').update({
    Food:x
  })

}


