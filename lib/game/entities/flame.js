ig.module(
    'game.entities.flame'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityFlame = ig.Entity.extend({
        gravityFactor: 0,
        size: {x:32, y:64},
        animSheet : new ig.AnimationSheet('media/candle_animated.png', 32, 64),
        init: function(x, y, settings){
            this.addAnim('idle', .25, [0, 1, 2, 3, 4, 5]);
            this.currentAnim = this.anims.idle;
            this.parent(x,y,settings);
        },
        update: function(){
            this.parent(); 
        }
    }); 
}); 