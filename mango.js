class mango{
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
        this.image=loadImage("mango.png")
         World.add(world,this.body);
     }
     display(){
         var mangopos=this.body.position;
         
         push()
         translate(mangopos.x, mangopos.y);
         
         fill("yellow")
         
        circle(mangopos.x,mangopos.y,this.r)
         
         pop()
     }
}