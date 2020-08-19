var canvas;
var canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	loadImages();
}


function imageLoadingDoneGameStart(){
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	carReset();
}


function updateAll(){
	moveAll();
	drawAll();
}


function moveAll(){
	carMove();
	carTrackHandling();
}

function drawAll(){
	drawTracks();
	drawCar();
	
	//mouseCoordinates
	//colorText("X:"  + mouseX + ", Y:" + mouseY, mouseX + 10, mouseY + 10, "red");
	var mouseTrackCol = Math.floor(mouseX / TRACK_WIDTH);
	var mouseTrackRow = Math.floor(mouseY / TRACK_HEIGHT);
	var trackIntexUnderMouse = rowColToArrayIntex(mouseTrackCol, mouseTrackRow);
	colorText(mouseTrackCol + ", " + mouseTrackRow + "; " + trackIntexUnderMouse, mouseX + 10, mouseY + 10, "red");

}

function rowColToArrayIntex(col, row){
	return col + TRACK_COLUMNS * row;
}



