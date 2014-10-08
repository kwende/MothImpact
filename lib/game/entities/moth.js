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
            if (this.isDead) {
                this.kill();
            }
        }
        else{
            this.friction.x = 0; 
        }
        
        this.parent(res);
      },
      
      update: function(){
        
        if (!this.isDead) {      
            var flame = ig.game.getEntitiesByType( EntityFlame )[0];
            
            var flameX = flame.pos.x + flame.size.x/2;
            var flameY = flame.pos.y + flame.size.y/2;
            
            var myX = this.pos.x + this.size.x/2;
            var myY = this.pos.y + this.size.y/2;
            
            var distance = Math.sqrt(Math.pow(flameX - myX, 2) + Math.pow(flameY - myY, 2));
            
            if (distance < 35) {
                this.isDead = true; 
            }
            
            if (this.vel.x > 0 || this.vel.y > 0) {
               this.currentAnim = this.anims.flap; 
            }
            else{
               this.currentAnim = this.anims.idle; 
            }        
        }
        else{
            this.currentAnim = this.anims.fire; 
        }
        this.parent();
      }
    })  
})
