const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground1;
var polygon, polygonImage;
var box1;

function preload() {

}

function setup() {
    var canvas = createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;

    // Creating Bodies Here
    //ground right side
    //ground left side
    ground = new Base(1200, 300, 300, 10)
    ground1 = new Base(700, 500, 300, 10)
    //1st row
    box1 = new Box(575, 470, 50, 50);
    box2 = new Box(625, 470, 50, 50)
    box3 = new Box(675, 470, 50, 50)
    box4 = new Box(725, 470, 50, 50)
    box5 = new Box(775, 470, 50, 50)
    box6 = new Box(825, 470, 50, 50)
    //2nd row
    box7 = new Box(600, 420, 50, 50)
    box8 = new Box(650, 420, 50, 50)
    box9 = new Box(700, 420, 50, 50)
    box10 = new Box(750, 420, 50, 50)
    box11 = new Box(800, 420, 50, 50)
    //3rd row
    box12 = new Box(625, 370, 50, 50)
    box13 = new Box(675, 370, 50, 50)
    box14 = new Box(725, 370, 50, 50)
    box15 = new Box(775, 370, 50, 50)
    //4th row
    box16 = new Box(650, 320, 50, 50)
    box17 = new Box(700, 320, 50, 50)
    box18 = new Box(750, 320, 50, 50)
    //5th row
    box19 = new Box(675, 270, 50, 50)
    box20 = new Box(725, 270, 50, 50)
    //6th row
    box21 = new Box(700, 220, 50, 50)

    //Building block for the right side 
    //1st row
    box22 = new Box(1075, 270, 50, 50)
    box23 = new Box(1125, 270, 50, 50)
    box24 = new Box(1175, 270, 50, 50)
    box25 = new Box(1225, 270, 50, 50)
    box26 = new Box(1275, 270, 50, 50)
    box27 = new Box(1325, 270, 50, 50)
    // 2nd row
    box28 = new Box(1100, 220, 50, 50)
    box29 = new Box(1150, 220, 50, 50)
    box30 = new Box(1200, 220, 50, 50)
    box31 = new Box(1250, 220, 50, 50)
    box32 = new Box(1300, 220, 50, 50)
    // 3rd row
    box33 = new Box(1125, 170, 50, 50)
    box34 = new Box(1175, 170, 50, 50)
    box35 = new Box(1225, 170, 50, 50)
    box36 = new Box(1275, 170, 50, 50)
    //4th row
    box37 = new Box(1150, 120, 50, 50)
    box38 = new Box(1200, 120, 50, 50)
    box39 = new Box(1250, 120, 50, 50)
    //5th row
    box40 = new Box(1175, 70, 50, 50)
    box41 = new Box(1225, 70, 50, 50)
    //6th row
    box42 = new Box(1200, 20, 50, 50)

    polygon = new Polygon(100, 100, 100, 100)
    slingShot = new SlingShot(polygon.body, { x: 100, y: 200 })
}

function draw() {
    background("white");
    Engine.update(engine);

    drawSprites();
    ground.display();
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    polygon.display();
    slingShot.display();
    //console.log(box1.body.speed);
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32 ) {
        slingShot.attach(polygon.body);}}