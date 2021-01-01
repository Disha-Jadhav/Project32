class box
{
    constructor(x, y, width, height, angle) 
    {
       var options = 
      {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display()
    {
      //console.log(this.body.speed)
      if(this.body.speed < 3)
      {
        var angle = this.body.angle;
        var pos = this.body.position
        fill("white");
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else
      {
        var pos = this.body.position
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, 255, this.visibility);
        //rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
   }
   score()
   {
     if(this.visibility < 0 && this.visibility >- 105)
     {
       score++
     }
   }
}