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
			"x": 156,
			"y": 108
		},
		{
			"type": "EntityMothcpu",
			"x": 420,
			"y": 140
		},
		{
			"type": "EntityMothcpu",
			"x": 204,
			"y": 324
		},
		{
			"type": "EntityMothcpu",
			"x": 396,
			"y": 268
		},
		{
			"type": "EntityMothcpu",
			"x": 64,
			"y": 76
		},
		{
			"type": "EntityMothcpu",
			"x": 100,
			"y": 280
		},
		{
			"type": "EntityMothcpu",
			"x": 344,
			"y": 368
		},
		{
			"type": "EntityMothcpu",
			"x": 196,
			"y": 180
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