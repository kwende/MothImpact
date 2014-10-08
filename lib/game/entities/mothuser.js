ig.module(
    'game.entities.mothuser'
)
.requires(
    'impact.entity',
    'game.entities.moth'
)
.defines(function(){
    EntityMothuser = EntityMoth.extend({
        update: function(){
            if (!this.isDead) {
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
                
            }

            
            this.parent();
        }
    })
})