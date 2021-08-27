   //creating ship
   var ship,ship_floating;

   //creating sea
   var sea,seaImg;

   
   function preload(){

   //loading ships animation
   ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

   //loading SEA image
   seaImg = loadImage("sea.png");
   }
   

   function setup(){
   //creating canvas
   createCanvas(600,600);

    //create sea img
    sea = createSprite(600,300);
    sea.addImage("sea",seaImg)
    sea.scale = 0.4;
    
   
    
    //creating ship sprite
    ship = createSprite(250,300,50,50);
    ship.addAnimation("floating",ship_floating);
    ship.scale = 0.5;
    
   
   }
  
   
   function draw() {
    background("blue");
    sea.velocityX = -4;

    if(sea.x < 0){
      sea.x = sea.width/8
      }
   
    drawSprites();
   }