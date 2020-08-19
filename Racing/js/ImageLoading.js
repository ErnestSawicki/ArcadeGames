var carPic = document.createElement("img");
var car2Pic = document.createElement("img");
var trackPics = [];


var picsToLoad = 0; // set automatically based on imageList in loadImages(), keep by default 0;

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad--;
	console.log(picsToLoad);
	if (picsToLoad == 0){
			imageLoadingDoneGameStart();
	}
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndLaunchIfReady();
	imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName){
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages(){
	var imageList = [{varName: carPic, theFile: "player1car.png"},
					{varName: car2Pic, theFile: "player2car.png"},
					
					{trackType: TRACK_ROAD, theFile: "track_road.png"},
					{trackType: TRACK_WALL, theFile: "track_wall.png"},
					{trackType: TRACK_FOREST, theFile: "track_forest.png"},
					{trackType: TRACK_FINISHLINE, theFile: "track_finishLine.png"},
					{trackType: TRACK_START, theFile: "track_flag.png"}];
	/*
	const TRACK_ROAD = 0;
	const TRACK_WALL = 1;
	const TRACK_PLAYERSTART = 2;
	const TRACK_FOREST = 3;
	const TRACK_FINISHLINE = 4;
	const TRACK_START = 5;
	*/
					
	picsToLoad = imageList.length;		
	
	for (var i = 0; i < imageList.length; i++){
		if (imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile)
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile)
		}
	}
	
}