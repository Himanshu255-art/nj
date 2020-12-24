class stone
{
    constructor(x,y,r){
       var options = {
           isStatic :true,
           restitution:0,
           friction:1.2
       } 
       
        this.body=Bodies.circle(x,y,r,options)
        this.x=x,
        this.y=y,
        this.r=r;
       
        World.add(world,this.body);
    }
    display(){
        var stonepos=this.body.position;
       
        push()
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        strokeWeight(0);
       
        fill("black")
        
        circle(85,366, this.r);

        if(this.body.x<80){
            this.body.x=mouseX;
            
        }
        
        pop()
    }

}