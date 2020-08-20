var canvas;
var canvasContext;

var blueWarrior = new warriorClass();
var greenWarrior = new warriorClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	loadImages();
}


function imageLoadingDoneGameStart(){
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	loadLevel(levelOne);
}

function loadLevel(whichLevel){
	worldGrid = whichLevel.slice();
	blueWarrior.reset(warriorPic, "BlueWarrior");
}


function updateAll(){
	moveAll();
	drawAll();
}


function moveAll(){
	blueWarrior.move();
	blueWarrior.worldHandling();
}

function drawAll(){
	drawWorlds();
	blueWarrior.draw();
	
	//mouseCoordinates
	//colorText("X:"  + mouseX + ", Y:" + mouseY, mouseX + 10, mouseY + 10, "red");
	var mouseWorldCol = Math.floor(mouseX / WORLD_WIDTH);
	var mouseWorldRow = Math.floor(mouseY / WORLD_HEIGHT);
	var worldIntexUnderMouse = rowColToArrayIntex(mouseWorldCol, mouseWorldRow);
	colorText(mouseWorldCol + ", " + mouseWorldRow + "; " + worldIntexUnderMouse, mouseX + 10, mouseY + 10, "red");

}

function rowColToArrayIntex(col, row){
	return col + WORLD_COLUMNS * row;
}



