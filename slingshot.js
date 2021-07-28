class SlingShot{
    constructor(bodyA, pointB) {
        var options = {

          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          lenght : 20
                     
        }
        this.pointB= pointB;
        this.sling = constraint.create(options);
        //this.height = height;
        World.add(world, this.sling);
      }
      attach(body){
        this.sling.bodyA = body
      }

      fly(){
          this.sling.bodyA=null;
      }


      display(){
          if(this.sling.bodyA){
            var pointA = this.sling.body.position;
            var pointB = this.pointB;
       
        strokeWieght(4);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
          }
      }
}