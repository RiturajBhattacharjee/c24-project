class Log {
    constructor(x,y,height,angle){
        var box_options = {
            restitution:0.1,
            friction: 1.5,
            density: 2
        }
        this.body = Bodies.rectangle(x,y,20,height,box_options) 
        this.width =20
        this.height = height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("blue")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}