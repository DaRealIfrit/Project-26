class Rope{
    constructor(Body1, Body2, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var rope_options={
            bodyA: Body1,
            bodyB: Body2,
            pointB:{x: this.offsetX,  y: this.offsetY},
        }
        this.rope = Constraint.create(rope_options)
        World.add(world, this.rope)    
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        strokeWeight (3);

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    }
}