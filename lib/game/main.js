ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.moth',
	'game.entities.flame',
	'game.entities.mothuser',
	'game.entities.mothcpu',
	
	'game.levels.first'
)
.defines(function(){

MyGame = ig.Game.extend({
	points: 0,
	// Load a font
	font: new ig.Font( 'media/font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.SPACE, 'up');
		ig.input.bind(ig.KEY.MOUSE1, 'move');
		this.gravity = 150; 
		this.loadLevel(LevelFirst);
	},
	
	update: function() {
		var len = ig.game.getEntitiesByType( EntityMothcpu).length;
		
		if (len < 5) {
			this.spawnEntity(EntityMothcpu, 100, 100, null);
		}
		
		// Update all entities and backgroundMaps
		this.parent();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	
		// Add your own drawing code here
		// Add your own, additional update code here
		var moth = ig.game.getEntitiesByType( EntityMothuser )[0];
		
		if (moth!= null && !moth.isDead) {
			var flame = ig.game.getEntitiesByType( EntityFlame )[0];
			
			var flameX = flame.pos.x + flame.size.x/2;
			var flameY = flame.pos.y + flame.size.y/2;
               
			var myX = moth.pos.x + moth.size.x/2;
			var myY = moth.pos.y + moth.size.y/2;
                
			var distance = Math.sqrt(Math.pow(myX - flameX, 2) + Math.pow(myY - flameY, 2));
			
			if (distance<100) {
				this.points++; 
			}
		}
		this.font.draw( this.points + ' points', 70, 400, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
