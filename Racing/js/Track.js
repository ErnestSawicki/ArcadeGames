const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACK_COLUMNS = 20;
const TRACK_ROWS = 15;
const TRACK_GAP = 3;
const TRACK_COLOR = "blue";

var trackGrid = [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 3, 3, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 5, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 4, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 4, 0, 0, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
				 
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_FOREST = 3;
const TRACK_FINISHLINE = 4;
const TRACK_START = 5;



function drawTracks(){
	canvasContext.fillStyle = TRACK_COLOR;
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	
	for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
		for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++){
			var tileKindHere = trackGrid[arrayIndex];
			var useImg = trackPics[tileKindHere];
			
			canvasContext.drawImage(useImg, drawTileX, drawTileY);
			arrayIndex++;
			drawTileX += TRACK_WIDTH;
		} //end of for each track in column
		drawTileX = 0;
		drawTileY += TRACK_HEIGHT;
	} // end of rows count
	drawTileY = 0;
} //end of drawTrack function
