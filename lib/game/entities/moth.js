ig.module(
    'game.entities.moth'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityMoth = ig.Entity.extend({
      size: {x:64, y: 64},
      animSheet: new ig.AnimationSheet('media/moth.png', 64, 64),
      isDead : false,
      init: function(x,y,settings){
        
        this.parent(x,y,settings);
        this.addAnim('idle', 1, [0]);
        this.addAnim('flap', .25, [0,1]);
        this.addAnim('fire', 1, [2]); 
      },
      
      handleMovementTrace: function(res){
        
        if (res.collision.y) {
            this.friction.x = 300; 
        }
        else{
            this.friction.x = 0; 
        }
        
        this.parent(res);
      },
      
      update: function(){
        
        if (this.vel.x > 0 || this.vel.y > 0) {
           this.currentAnim = this.anims.flap; 
        }
        else{
           this.currentAnim = this.anims.idle; 
        }
       
        if (ig.input.state('move')) {
           
           var mouseX = ig.input.mouse.x;
           var mouseY = ig.input.mouse.y;
          
           var myX = this.pos.x + this.size.x/2;
           var myY = this.pos.y + this.size.y/2;
           
           var distance = Math.sqrt(Math.pow(myX - mouseX, 2) + Math.pow(myY - mouseY, 2));
           var velocityFromDistance = 2 * (400 - distance);
           
           var xDistance = Math.abs(myX - mouseX);
           var yDistance = Math.abs(myY - mouseY);
           
           var velocityInXDirection = (xDistance / distance) * velocityFromDistance;
           var velocityInYDirection = (yDistance / distance) * velocityFromDistance;
           
           if (mouseX > myX) {
                velocityInXDirection *= -1; 
           }
           if (mouseY > myY) {
                velocityInYDirection *= -1; 
           }
           
           this.vel.x = velocityInXDirection;
           this.vel.y = velocityInYDirection; 
        }           

        this.parent();
      }
    })  
})
