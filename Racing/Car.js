var carPic = document.createElement("img");
var carPicLoaded = false;

//car var/constants
var carX = 75;
var carY = 75;
var carAngle = 3*Math.PI/2;
var carRadius = 10;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.3
const BRAKES_POWER = 0.6;
const TRACTION = 0.1;

function carImageLoad(){
	carPic.onload = function(){
	 carPicLoaded = true;
	}
	carPic.src = "player1car.png";
}

function carMove(){
	carSpeed *= GROUNDSPEED_DECAY_MULT;
	if (keyHeld_Gas && carSpeed < 5){
		carSpeed += DRIVE_POWER;
	}
	if (keyHeld_Brake && carSpeed > -1){
		carSpeed -= BRAKES_POWER;
	}
	if (keyHeld_TurnLeft){
		carAngle -= TRACTION;
	}
	if (keyHeld_TurnRight){
		carAngle += TRACTION;
	}
	carX += carSpeed * Math.cos(carAngle);
	carY += carSpeed * Math.sin(carAngle);
	
}

function carTrackHandling(){
	//tracks delete under car
	var carTrackCol = Math.floor(carX / TRACK_WIDTH);
	var carTrackRow = Math.floor(carY / TRACK_HEIGHT);
	var trackIntexUnderCar = rowColToArrayIntex(carTrackCol, carTrackRow);
	
	if(carTrackCol >= 0 && carTrackCol < TRACK_COLUMNS &&
	carTrackRow >= 0 && carTrackRow < TRACK_ROWS ){
		if (trackGrid[trackIntexUnderCar]){
			if (carSpeed > 0) {
				carSpeed -= 1;
			}
			if (carSpeed < 0) {
				carSpeed += 1;
			}
		} //end of trackIntexCheck, false assignment after colisiton, speedDirection change
	} //end of carWithin tracks space
} //end of carTrackHandling function

function drawCar(){
	if(carPicLoaded){
		drawBitmapCenteredWithRotation(carPic, carX, carY, carAngle);
	}
}

function carReset(){
	for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
		for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++){
			var arrayIndex = rowColToArrayIntex(eachCol, eachRow);
			if (trackGrid[arrayIndex] == TRACK_PLAYERSTART){
				trackGrid[arrayIndex] = TRACK_ROAD;
				carX = eachCol * TRACK_WIDTH + TRACK_WIDTH/2;
				carY = eachRow * TRACK_HEIGHT + TRACK_HEIGHT/2;
				} //end of is this track here
			
		} //end of for each track in column
	} // end of rows count
}