ig.module( 'game.levels.first' )
.requires( 'impact.image','game.entities.moth' )
.defines(function(){
LevelFirst=/*JSON[*/{
	"entities": [
		{
			"type": "EntityMoth",
			"x": 156,
			"y": 108
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 10,
			"height": 8,
			"linkWithCollision": false,
			"visible": true,
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
			"visible": true,
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
		},
		{
			"name": "candle",
			"width": 5,
			"height": 4,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/candle.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 128,
			"foreground": false,
			"data": [
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelFirstResources=[new ig.Image('media/world.png'), new ig.Image('media/candle.png')];
});