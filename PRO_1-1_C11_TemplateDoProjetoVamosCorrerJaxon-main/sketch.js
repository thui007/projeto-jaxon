var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,800);
 path = createSprite(200,600,100,100);
path.addImage(pathImg);

// Movendo o fundo 
path.y = path.width /2;
path.velocityY = -3;



//Criando menino que corre 
boy = createSprite(200,700,20,50);
boy.addAnimation(boyImg);

// Criando Boundary (Limite) esquerdo  
leftBoundary = createSprite(0,600,100,400);
leftBoundary.visible = false;


//Crie Boundary direito
rightBoundary = createSprite(400,600,100,400);
rightBoundary.visible = false;
}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
boy.x = World.mouseX;

edges = createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 //Reiniciar o fundo



 drawSprites();

 }




