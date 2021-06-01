var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edge1;
var edge2;
var edge3;
var edge4;
var music;




function preload(){
    music = loadSound("enhypen_drunk-dazed.mp3");
    

}


function setup(){
    canvas = createCanvas(800,600);
    
    edges = createEdgeSprites()

    //create 4 different surfaces

    

    surface1= createSprite(100, 590, 190, 25);
    surface1.shapeColor = "red";
    surface1.velocityX = 0;

    surface2 = createSprite(300,590,190,25);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,590,190,25);
    surface3.shapeColor = "orange";

    surface4 = createSprite(700,590,190,25);
    surface4.shapeColor = "yellow";


    box = createSprite(random(20,750));
    box.shapeColor = "purple";
    box.velocityX = 4;
    box.velocityY = 4;
    box.scale = 0.4;

   

    //create box sprite and give velocity

}

function draw() {
    background("black");
  
    box.bounceOff(edges)
   

 bounceOff();
   
drawSprites();


    //add condition to check if box touching surface and make it box
}



function bounceOff(){

    if(box.bounceOff(surface1) ){
        box.shapeColor = "red";
        music.play();
        
      
    }
    
    if(box.bounceOff(surface2) ){
        box.shapeColor = "blue";
        music.play();
        
    }
    
    if(box.bounceOff(surface3) ){
        box.shapeColor = "orange";
       
        
    }
    
    if(box.bounceOff(surface4) ){
        box.shapeColor = "yellow";
        music.play();
        
    }

   
    
}


   
    




    
