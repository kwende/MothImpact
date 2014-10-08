ig.module(
    'game.entities.mothcpu'
)
.requires(
    'impact.entity',
    'game.entities.moth'
)
.defines(function(){
    EntityMothcpu = EntityMoth.extend({
        timeSinceLastFlap : 0,
        update: function(){
            if (!this.isDead) {
                if (this.timeSinceLastFlap == 0) {
                    this.timeSinceLastFlap = 10;
                    
                    var rand = Math.random();
                    var sign = Math.random() - .5; 
                    this.vel.x = 2000 * rand * sign;
                    rand = Math.random();
                    sign = Math.random() - .5;
                    this.vel.y = 2000 * rand * sign;
                }
                else{
                    this.timeSinceLastFlap--; 
                }
            }
            this.parent();
        }
    })
})