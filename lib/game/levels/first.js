ig.module( 'game.levels.first' )
.requires( 'impact.image','game.entities.moth','game.entities.flame' )
.defines(function(){
LevelFirst=/*JSON[*/{
	"entities": [
		{
			"type": "EntityMoth",
			"x": 156,
			"y": 108
		},
		{
			"type": "EntityFlame",
			"x": 304,
			"y": 228
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