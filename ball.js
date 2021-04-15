class Ball{
    constructor(x,y,radius){
        this.image = loadImage("Face.png");
    var options ={
        isStatic:false,
        'restitution':0.6,
        'friction':0,
        'density':0.7
    }
    this.x=x
    this.y=y
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,(this.radius-0)/2,options);
    World.add(world,this.body);
    }  

        
    
    display(){
    //var angle = this.body.angle;
   
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("Blue")
    rotate(this.body.angle);
   
    rectMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();


    }
    
}