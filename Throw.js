class Throw {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
      
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    
    fly() {
      this.rope.bodyA = null;
    }

    Launch (bodyA){
      this.throw.bodyA=bodyA;
    }
  
    display() {

    }
  }