const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box11, box12, box21, polygon1, rope1, ground1, BGImg, bg;

var score = 0;

function preload()
{
    getBGImg();
}

function setup()
{
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
 
    ground1 = new ground(600, 680, 1200, 50);
    ground2 = new ground(800, 670, 600, 200);

    box1 = new box(700, 600, 100, 100);
    box2 = new box(800, 600, 100, 100);
    box3 = new box(900, 600, 100, 100);
    box11 = new box(750, 550, 100, 100);
    box12 = new box(850, 550, 100, 100);
    box21 = new box(800, 400, 100, 100);
    
    polygon1 = new polygon(150, 650, 6, 100);

    rope1 = new rope(polygon1.body, {x: 150, y: 450});
}

function draw()
{
    if(BGImg)
    {
        background(BGImg);
    }
    
    fill("red");
    stroke("red");
    textSize(35);
    text("Score: " + score, 50, 50);

    Engine.update(engine);

    ground1.display();
    ground2.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box21.display();
    box21.score();
  
    polygon1.display();

    rope1.display();

    drawSprites();
}

        function mouseDragged()
        {
            Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});
        }
        function mouseReleased()
        {
            rope1.fly();
        }
        function keyPressed()
        {
            if(keyCode === 32)
            {
                rope1.attach(polygon1.body);
            }
        }

async function getBGImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if(hour >= 06 && hour <= 18)
    {
        bg = "blue";
    }
    else
    {
        bg = "black";
    }

    BGImg = bg;
}