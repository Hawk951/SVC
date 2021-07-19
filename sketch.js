var hulk,hulkimg;
var ironMan,ironManimg;
var thor,thorImg;
var spiderMan,spiderManimg;
var background,backgroundimg;
var bullet;
var themeTune;
var gameState="wait";
var player;




function preload(){
	captainAmericastill=loadImage("avengers/captainamerica.png")
	captainAmerica1img=loadImage("avengers/captainAmericarunningright.gif")
	ironManimg=loadImage("Objects/IronMan.gif");
    hulkimg=loadImage("Objects/Hulk.gif");   
	thorImg=loadImage("Objects/Thor.gif");
	spiderManimg=loadImage("Objects/SpiderMan.gif");
    spidermanimgstill=loadImage("Objects/SpiderMan.png")
	thorimgstil=loadImage("Objects/Thor.png");
	hulkimgstill=loadImage("Objects/Hulk.png");
	ironManimgstill=loadImage("Objects/IronMan.png");
	themeTune=loadSound("avengers/AvengersThemeTune.mp4");
   
	bg= loadImage("space/spacebg.gif");


}


function setup(){
	createCanvas(windowWidth,windowHeight)
	

	background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
background1.addImage(bg)
background1.visible=false
background1.scale=2.4


	captainAmerica=createSprite(100,100)
	captainAmerica.addImage(captainAmericastill)
	
	/*hulk=createSprite(100,100)
	hulk.addImage(hulkimg)

	ironMan=createSprite(100,250)
	ironMan.addImage(ironManimgstill)
	ironMan.scale=0.5;



	thor=createSprite(100,350);
	thor.addImage(thorImg);
	thor.scale=0.3

	spiderMan=createSprite(100,550)
    spiderMan.addImage(spidermanimgstill);
	spiderMan.scale = .5;*/
	
	
	button1=createButton("Pause")
	button1.position(1750,100) 

	button=createButton("start")
	button.position(100,100)


	player=createSprite(100,200)
    player.visible=false

}




function draw(){
	

if (gameState==="wait"){
	//hulk.visible=false;
	//background("skyblue")
	//ironMan.visible=false;
	thor.visible=false
	spiderMan.visible=false;

background("cyan");
text("AVENGERS IN ACTION", windowWidth/2-50,windowHeight/2);

button.mousePressed(()=>{

	gameState="start";
	//background(background1);

	background1.visible=true
	button.hide();
	hulk.visible=true;
	//ironMan.visible=true;
	thor.visible=true;
	spiderMan.visible=true;
})
 
if (gameState==="start"){
//background(bg)
}


}
drawSprites()


if (mousePressedOver(spiderMan)){
	spiderMan.addImage(spiderManimg);
	spiderMan.scale=2;
}
else  {spiderMan.addImage(spidermanimgstill);
	spiderMan.scale=.5
}

if(mousePressedOver(thor)){
	thor.addImage(thorImg);
	
}
else {thor.addImage(thorimgstil);
	
}

if(mousePressedOver(hulk)){
	hulk.addImage(hulkimg)
	
	}
else{hulk.addImage(hulkimgstill)


}










/*if (gameState==="start"){
	
}*/



	

}
