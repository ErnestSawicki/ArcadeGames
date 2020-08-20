const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.3
const BRAKES_POWER = 0.6;
const TRACTION = 0.1;
const MIN_SPEED_TO_TURN = 0.1;

function warriorClass() {
	
	this.name = "Untitled WARRIOR";

	this.X = 75;
	this.Y = 75;
	this.Speed = 0;
	this.pic
	
	this.keyHeld_Up = false;
	this.keyHeld_Down = false;
	this.keyHeld_Left = false;
	this.keyHeld_Right = false;
	
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
	
	this.reset = function (whichImage, warriorName){
		this.pic = whichImage;
		this.name = warriorName;
		this.Speed = 0;
		
		for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++){
			for (var eachCol = 0; eachCol < WORLD_COLUMNS; eachCol++){
				var arrayIndex = rowColToArrayIntex(eachCol, eachRow);
				if (worldGrid[arrayIndex] == WORLD_PLAYERSTART){
					worldGrid[arrayIndex] = WORLD_ROAD;
					this.X = eachCol * WORLD_WIDTH + WORLD_WIDTH/2;
					this.Y = eachRow * WORLD_HEIGHT + WORLD_HEIGHT/2;
					return;
					} //end of if this world here
			} //end of for each world in column
		} // end of rows count
	}


	this.move = function (){
		if (this.keyHeld_Up){
			this.Y += 10;
			console.log("keyHeld_up");
		}
		if (this.keyHeld_Down){
			this.Y -= 10;
			console.log("keyHeld_Down");
		}
		if (this.keyHeld_Left){
			this.X -= 10;
			console.log("keyHeld_Left");
		}
		if (this.keyHeld_Right){
			this.X += 10;
			console.log("keyHeld_Right");
			}
	}
	
	this.draw = function(){
		drawBitmapCenteredWithRotation(this.pic, this.X, this.Y, 0);
	}
	
	function returnTileTypeAtColRow(col, row){
		if(col >= 0 && col < WORLD_COLUMNS &&
			row >= 0 && row < WORLD_ROWS){
				var worldIndexUnderCoord = rowColToArrayIntex(col, row);
				return (worldGrid[worldIndexUnderCoord]);
			} else {
				return WORLD_WALL;
			}
	}

	this.worldHandling = function(){
		//worlds delete under warrior
		var warriorWorldCol = Math.floor(this.X / WORLD_WIDTH);
		var warriorWorldRow = Math.floor(this.Y / WORLD_HEIGHT);
		var worldIntexUnderWarrior = rowColToArrayIntex(warriorWorldCol, warriorWorldRow);
		
		if(warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLUMNS &&
		warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS ){
			var tileHere = returnTileTypeAtColRow(warriorWorldCol, warriorWorldRow);
			if (tileHere == WORLD_FINISHLINE){
				console.log(this.name + " WON");
				loadLevel(levelOne);
			}
			else if(tileHere != WORLD_ROAD){
				this.Speed *= -0.5;
			}
		} //end of warriorWithin worlds space
	} //end of warriorWorldHandling function
}



