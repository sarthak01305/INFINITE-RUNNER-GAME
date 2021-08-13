var PLAY
var END


var rocket,rocketImg
var space,spaceImg
var gameover,gameoverImg











function preload(){

rocketImg = loadImage("rocket.jpeg");
spaceImg = loadImage("space_backround.jpg");
astoroidImg = loadImage("astoroid.jpeg");
gameoverImg = loadImage("gameover.jpg");

}

function setup() {
 createCanvas(600,600);

 rocket = createSprite(200,200,50,50);
 rocket.addImage("rocket",rocketImg);

rocketGroup = new rocketGroup();
astoroidGroup = new astoroidGroup();

space = createSprite(600,600,600,600);
space.addImage("space_backround.jpg",spaceImg);
space.velocity = 2;

}

function draw() {
 background(225);

if(gameState === "play"){
    if(space.y>600){
        space.y = 300
    }

if(keyDown("left_arrow")){
    rocket.x = rocket.x-3;
}
if(keyDown("right_arrow")){
    rocket.x = rocket.x+3;
}
if(keyDown("space")){
    rocket.velocityY = -5;
}

rocket.velocityY = rocket.velocityY + 0.8;

if(astoroidGroup.isTouching(rocket)){
    rocket.velocityY = 0;
    gameState = "end"
}


spawnAstoroid();


drawSprites

}

if(gameState==="end"){
    gameover = createSprite(200,200,60,60)
}


function spawnAstoroid()
{
    if(frameCount % 240 ===0 ){
        var astoroid,astoroidImg
astoroid = creatSprite(200,200,50,50);
astoroid.addImage(astoroidImg);

astoroid.velocityY = 1;



rocket.depth = astoroid.depth
rocket.depth + 1


astoroid.lifetime = 600



    }
}



















}