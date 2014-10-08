ig.module( 'game.levels.first' )
.requires( 'impact.image','game.entities.flame','game.entities.mothuser','game.entities.mothcpu' )
.defines(function(){
LevelFirst=/*JSON[*/{
	"entities": [
		{
			"type": "EntityFlame",
			"x": 304,
			"y": 228
		},
		{
			"type": "EntityMothuser",
			"x": 300,
			"y": 384
		},
		{
			"type": "EntityMothcpu",
			"x": 460,
			"y": 84
		},
		{
			"type": "EntityMothcpu",
			"x": 128,
			"y": 160
		},
		{
			"type": "EntityMothcpu",
			"x": 360,
			"y": 96
		},
		{
			"type": "EntityMothcpu",
			"x": 88,
			"y": 84
		},
		{
			"type": "EntityMothcpu",
			"x": 200,
			"y": 104
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 10,
			"height": 8,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "background",
			"width": 10,
			"height": 8,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/world.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelFirstResources=[new ig.Image('media/world.png')];
});