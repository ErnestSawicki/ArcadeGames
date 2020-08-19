const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.3
const BRAKES_POWER = 0.6;
const TRACTION = 0.1;
const MIN_SPEED_TO_TURN = 0.1;

function carClass() {

	this.X = 75;
	this.Y = 75;
	this.Angle = 3*Math.PI/2;
	this.Speed = 0;
	this.pic
	
	this.keyHeld_Gas = false;
	this.keyHeld_Brake = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;
	
	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyLeft;
	this.controlKeyDown;
	
	this.setupInput = function (upKey, downKey, rightKey, leftKey){
		this.controlKeyUp = upKey;
		this.controlKeyDown = downKey;
		this.controlKeyRight = rightKey;
		this.controlKeyLeft = leftKey;
	}
	
	this.reset = function (whichImage){
		this.pic = whichImage;
		
		for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
			for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++){
				var arrayIndex = rowColToArrayIntex(eachCol, eachRow);
				if (trackGrid[arrayIndex] == TRACK_PLAYERSTART){
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.X = eachCol * TRACK_WIDTH + TRACK_WIDTH/2;
					this.Y = eachRow * TRACK_HEIGHT + TRACK_HEIGHT/2;
					return;
					} //end of if this track here
			} //end of for each track in column
		} // end of rows count
	}


	this.move = function (){
		this.Speed *= GROUNDSPEED_DECAY_MULT;
		if (this.keyHeld_Gas && this.Speed < 5){
			this.Speed += DRIVE_POWER;
		}
		if (this.keyHeld_Brake && this.Speed > -1){
			this.Speed -= BRAKES_POWER;
		}
		if (Math.abs(this.Speed) >= MIN_SPEED_TO_TURN){
			if (this.keyHeld_TurnLeft){
			this.Angle -= TRACTION;
			}
			if (this.keyHeld_TurnRight){
			this.Angle += TRACTION;
			}
		}
		this.X += this.Speed * Math.cos(this.Angle);
		this.Y += this.Speed * Math.sin(this.Angle);
	}
	
	this.draw = function(){
		drawBitmapCenteredWithRotation(this.pic, this.X, this.Y, this.Angle);
	}

	this.trackHandling = function(){
		//tracks delete under car
		var carTrackCol = Math.floor(this.X / TRACK_WIDTH);
		var carTrackRow = Math.floor(this.Y / TRACK_HEIGHT);
		var trackIntexUnderCar = rowColToArrayIntex(carTrackCol, carTrackRow);
		
		if(carTrackCol >= 0 && carTrackCol < TRACK_COLUMNS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS ){
			if (trackGrid[trackIntexUnderCar]){
				if (this.Speed > 0) {
					this.Speed -= 1;
				}
				if (this.Speed < 0) {
					this.Speed += 1;
				}
			} //end of trackIntexCheck, false assignment after colisiton, speedDirection change
		} //end of carWithin tracks space
	} //end of carTrackHandling function
}



