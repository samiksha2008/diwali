var backgroundImage;
var flower,flowerImg;
var diwali,diwaliImg;
var diwa,diwaImg;
var cracker,crackerImg;
var diya,diyaImg;
var paper,paperImg;








function preload(){
    backgroundImage=loadImage("orange.jpg")
    flowerImg=loadImage("flo.png")
    diwaliImg=loadImage("happ.png")
    diwaImg=loadImage("diwa.png")
    crackerImg=loadImage("cracker2.gif")
    diyaImg=loadImage("diya1.png")
    paperImg=loadImage("paper.png")
   
    
   
 

}

function setup() {
    canvas=createCanvas(windowWidth,windowHeight)

    diwa = createSprite(650,130,50,50);
    diwa.scale=0.5
    diwa.addImage("diwa", diwaImg);
    
    cracker = createSprite(190,130,50,50);
    cracker.scale=1
    cracker.addImage("cracker", crackerImg);

    cracker = createSprite(1070,130,50,50);
    cracker.scale=1
    cracker.addImage("cracker", crackerImg);
    

    flower = createSprite(650,250,50,50);
    flower.scale=1
    flower.addImage("flower", flowerImg);

    diya = createSprite(350,600,50,50);
    diya.scale=0.3
    diya.addImage("diya",diyaImg);

    diya = createSprite(950,600,50,50);
    diya.scale=0.3
    diya.addImage("diya",diyaImg);

    
  

}

function draw() {
    background(backgroundImage);

    fill("white");
    textSize(70);
    text("SIDDHI ASSOCIATES", 300,380)

    fill("white");
    textSize(50);
    text("wish you", 550,430)


    
    fill("blue");
    textSize(15);
    text("EXPERT IN AUTOMATION !", 1000,480)

    fill("blue");
    textSize(15);
    text("We deal with PROS,Control Valve,flow meter", 950,498)

    fill("blue");
    textSize(15);
    text("all type of Smart transmitter,Solenoid valve,", 950,515)

    fill("blue");
    textSize(15);
    text("pressure and temperature Guage, RTD, Thermocouple", 950,530)

    fill("blue");
    textSize(15);
    text("for more details please contact on :", 955,545)


    fill("blue");
    textSize(15);
    text("9482704578/7022102061", 990,566)

    fill("blue");
    textSize(15);
    text("EXPERT IN AUTOMATION !",50,480)

    fill("blue");
    textSize(15);
    text("We deal with PROS,Control Valve,flow meter",20,498)

    fill("blue");
    textSize(15);
    text("all type of Smart transmitter,Solenoid valve,", 20,515)

    fill("blue");
    textSize(15);
    text("pressure and temperature Guage, RTD, Thermocouple", 20,530)

    fill("blue");
    textSize(15);
    text("for more details please contact on :", 20,545)

    fill("blue");
    textSize(15);
    text("9482704578/7022102061", 20,566)

   

    diwali= createSprite(650,550,50,50);
    diwali.scale=0.2
    diwali.addImage("diwali", diwaliImg);
    
   

    drawSprites();
 
}