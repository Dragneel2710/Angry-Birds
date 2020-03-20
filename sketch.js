const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box2,box3,box4,box5,box6;
var pig,pig2;
var log,log2;
var BG;
function preload(){
BG = loadImage('sprites/bg.png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Ground(600,height,1200,20);

    pig = new Pig(810,350);

    log = new Wood(810,260,300,PI/2);

    box4 = new Box(700,240,70,70);
    box5 = new Box(920,240,70,70);

    pig2 = new Pig(810,220);

    log2 = new Wood(810,180,300,PI/2);

    bird = new Bird(100,100);

    box6 = new Box(810,160,70,70);

    log4 = new Wood(760,120,150, PI/7);
    log5 = new Wood(870,120,150, -PI/7);
}

function draw(){
    background(BG);
    Engine.update(engine);
    box.display();
    box2.display();
    box3.display();

    pig.display();

    log.display();

    box4.display();
    box5.display();

    pig2.display();

    log2.display();

    bird.display();

    box6.display();

    log4.display();
    log5.display();
}
