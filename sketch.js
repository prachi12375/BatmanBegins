const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var drops = [];

function preload(){
    
}

function setup(){
    canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    
    for(var i = 0 ; i<maxDrops ; i++){
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }

    man = new umbrella(300, 530);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0 ; i<maxDrops ; i++){
        drops[i].update();
        drops[i].display();
    }

    man.display();

    drawSprites();
    
}   

