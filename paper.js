class Paper{
constructor(x,y){
var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.1,
    density:0.2
}
this.body = Bodies.circle(x,y,10,options);
World.add(world,this.body)
}
display(){
    // var pos=this.body.position;
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,10)
}








}