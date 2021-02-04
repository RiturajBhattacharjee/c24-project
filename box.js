class Box {
    constructor(x,y,width,height){
        var box_options = {
            restitution:0.3,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options) 
        this.width = width
        this.height = height
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