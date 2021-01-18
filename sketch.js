var bow,bowi;
var edges;
var redb,redbi;
var grb,grbi;
var blb,blbi
var arrow,arrowi;

//FortimeInterval
var downloadTimer;
//Timer starting value
var timeleft = 10;

gameState="Shooting";
function preload(){
bowi=loadImage("bow.png");
redbi=loadImage("red_balloon0.png");
grbi=loadImage("green_balloon0.png");
blbi=loadImage("blue_balloon0.png");
arrowi=loadImage("arrow.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bow=createSprite(width-150,400,50,50);
bow.addImage(bowi);
bow.scale=3;

arrow=createSprite(1818,315,10,10);
arrow.addImage(arrowi);
arrow.scale=1;
arrow.visible=false;
arrow.debug=true;
arrow.setCollider("rectangle",0,0,arrow.width,100);

redb=createSprite(679,155,400,400);
redb.addImage(redbi);
redb.scale=0.3;

grb=createSprite(679,420,400,400);
 grb.addImage(grbi);
grb.scale=0.3;

blb=createSprite(679,660,400,400);
 blb.addImage(blbi);
blb.scale=0.3;

//Creating text element 
timer = createElement("h1");
timer.position(100,400)
downloadTimer=setInterval(timerr,1000);

}
function timerr(){
  //if we use text() it will keept overwriting because of draw() even thought you use background()
  timer.html(timeleft);     
  if(timeleft === 0){
    clearInterval(downloadTimer);
    //do the end part
  }
  timeleft--;
}
function draw(){
    console.log(gameState);
    if(gameState==="Shooting"){
  background("white");
  edges=createEdgeSprites();
  bow.y=World.mouseY;
  bow.bounceOff(edges);
  arrow.y=bow.y;
    if(keyDown("space")){
        arrow.visible=true;
        arrow.velocityX=-13;
    }
    if(arrow.isTouching(grb)){
     gameState="END";
      
        
    }
       if(arrow.isTouching(redb)){
       gameState="CONFUSED";
   
    }
    if(arrow.isTouching(blb)){
      gameState="CONFUSED";
    
   }
    // if(mousePressedOver(redb)){
    //     background("black");
     
    // }
  drawSprites();
  textSize(30);
  fill("Pink");
  text("Target: Shoot the balloon with text BLUE",19,36);
  textSize(30);
  fill("Pink");
  text("and not the BLUE balloon 😜",61,67);

  textSize(30);
  fill("lightgreen");
  textFont("Algerian");
  text("G",667,66); 
  textSize(30);
  textFont("Algerian");
  fill("lightgreen");
  text("R",667,94); 
  textSize(30);
  textFont("Algerian");
  fill("lightgreen");
  text("E",667,122); 
  textSize(30);
  textFont("Algerian");
  fill("lightgreen");
  text("E",667,153); 
  textSize(30);
  textFont("Algerian");
  fill("lightgreen");
  text("N",667,179); 

  textSize(30);
  fill("red");
  textFont("Algerian");
  text("R",669,608); 
  textSize(30);
  fill("red");
  textFont("Algerian");
  text("E",669,649); 
  textSize(30);
  fill("red");
  textFont("Algerian");
  text("D",669,690); 

  textSize(30);
  fill("blue");
  textFont("Algerian");
  text("B",667,327); 
  textSize(30);
  fill("blue");
  textFont("Algerian");
  text("L",669,356); 
  textSize(30);
  fill("blue");
  textFont("Algerian");
  text("U",667,395); 
  textSize(30);
  fill("blue");
  textFont("Algerian");
  text("E",667,436); 

    }
    if(gameState==="END"){
        background("black");
        arrow.visible=false;
        bow.destroy();
        grb.visible=false;
        redb.visible=false;
        blb.visible=false;
        arrow.velocityX=0;
        textSize(40);
        textFont("Bahnschrift SemiBold");
         text("You are Intelligent 😅",958,372);
    }
    if(gameState==="CONFUSED"){
        background("black");
        arrow.visible=false;
        bow.destroy();
        grb.visible=false;
        redb.visible=false;
        blb.visible=false;
        arrow.velocityX=0;
        textSize(40);
        textFont("Bahnschrift SemiBold");
        text("Oh no you got confused",958,372);
    }
    
    
}

