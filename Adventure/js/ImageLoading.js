var warriorPic = document.createElement("img");
var worldPics = [];


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

function loadImageForWorldCode(worldCode, fileName){
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages(){
	var imageList = [{varName: warriorPic, theFile: "warrior.png"},
					
					{worldType: WORLD_ROAD, theFile: "world_road.png"},
					{worldType: WORLD_WALL, theFile: "world_wall.png"},
					{worldType: WORLD_FOREST, theFile: "world_forest.png"},
					{worldType: WORLD_FINISHLINE, theFile: "world_finishLine.png"},
					{worldType: WORLD_DOORS, theFile: "world_doors.png"}];
					
	picsToLoad = imageList.length;		
	
	for (var i = 0; i < imageList.length; i++){
		if (imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile)
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile)
		}
	}
	
}