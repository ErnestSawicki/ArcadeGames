//auxilary draw functions

function drawBitmapCenteredWithRotation(useBitmap, atX,atY, withAng) {
	canvasContext.save();
	canvasContext.translate(atX, atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
	canvasContext.restore();
}

function colorRectangle(color, positionX, positionY, width, height){
	canvasContext.fillStyle = color;
	canvasContext.fillRect(positionX,positionY,width, height);
}
function colorCar(color, positionX, positionY, radius){
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(positionX,positionY,radius,0,Math.PI*2, true);
	canvasContext.fill();
}

function colorText(showWords, textX,textY, fillColor){
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
}