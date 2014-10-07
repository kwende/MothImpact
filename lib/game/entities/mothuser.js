ig.module(
    'game.entities.mothuser'
)
.requires(
    'impact.entity',
    'game.entities.moth'
)
.defines(function(){
    EntityMothUser = game.entities.moth.extend({
    })
})