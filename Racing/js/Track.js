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
				 5, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
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
	for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
		for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++){
			var arrayIndex = rowColToArrayIntex(eachCol, eachRow);
		
			if (trackGrid[arrayIndex] == TRACK_ROAD){
				canvasContext.drawImage(trackRoadPic, TRACK_WIDTH * eachCol, TRACK_HEIGHT * eachRow);
			}
			if (trackGrid[arrayIndex] == TRACK_WALL){
				canvasContext.drawImage(trackWallPic, TRACK_WIDTH * eachCol, TRACK_HEIGHT * eachRow);
			}
			if (trackGrid[arrayIndex] == TRACK_FOREST){
				canvasContext.drawImage(trackForestPic, TRACK_WIDTH * eachCol, TRACK_HEIGHT * eachRow);
			}
			if (trackGrid[arrayIndex] == TRACK_FINISHLINE){
				canvasContext.drawImage(trackFinishLinePic, TRACK_WIDTH * eachCol, TRACK_HEIGHT * eachRow);
			}
			if (trackGrid[arrayIndex] == TRACK_START){
				canvasContext.drawImage(trackStartPic, TRACK_WIDTH * eachCol, TRACK_HEIGHT * eachRow);
			}
			
		} //end of for each track in column
	} // end of rows count
} //end of drawTrack function
