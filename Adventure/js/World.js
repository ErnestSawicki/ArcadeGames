const WORLD_WIDTH = 50;
const WORLD_HEIGHT = 50;
const WORLD_COLUMNS = 20;
const WORLD_ROWS = 15;
const WORLD_GAP = 3;
const WORLD_COLOR = "blue";

var levelOne = [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 3, 3, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 4, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 4, 0, 0, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
				 
var worldGrid = [];
				 
const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_FOREST = 3;
const WORLD_FINISHLINE = 4;
const WORLD_DOORS = 5;



function drawWorlds(){
	canvasContext.fillStyle = WORLD_COLOR;
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	
	for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++){
		for (var eachCol = 0; eachCol < WORLD_COLUMNS; eachCol++){
			var tileKindHere = worldGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];
			
			canvasContext.drawImage(useImg, drawTileX, drawTileY);
			arrayIndex++;
			drawTileX += WORLD_WIDTH;
		} //end of for each world in column
		drawTileX = 0;
		drawTileY += WORLD_HEIGHT;
	} // end of rows count
	drawTileY = 0;
} //end of drawWorld function
