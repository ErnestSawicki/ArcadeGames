var carPic = document.createElement("img");
var trackRoadPic = document.createElement("img");
var trackWallPic = document.createElement("img");
var trackForestPic = document.createElement("img");
var trackFinishLinePic = document.createElement("img");
var trackStartPic = document.createElement("img");

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

function loadImages(){
	var imageList = [{varName: carPic, theFile: "player1car.png"},
					{varName: trackRoadPic, theFile: "track_road.png"},
					{varName: trackWallPic, theFile: "track_wall.png"},
					{varName: trackForestPic, theFile: "track_forest.png"},
					{varName: trackFinishLinePic, theFile: "track_finishLine.png"},
					{varName: trackStartPic, theFile: "track_flag.png"}];
					
	picsToLoad = imageList.length;		
	
	for (var i = 0; i < imageList.length; i++){
		beginLoadingImage(imageList[i].varName, imageList[i].theFile)
	}
	
}