const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_RIGHT_ARROW = 39;
const KEY_LEFT_ARROW = 37;

const KEY_W = 87;
const KEY_S = 83;
const KEY_D = 68;
const KEY_A = 65;

var mouseX;
var mouseY;

function setupInput(){
	canvas.addEventListener('mousemove', updateMousePos);
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	
	blueWarrior.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW);
}
function updateMousePos(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	// for future Y value of mouse position
	mouseY = evt.clientY - rect.top - root.scrollTop;
	
}

function keySet(evt, setTo, warrior){
	if (evt.keyCode == warrior.controlKeyLeft){
		warrior.keyHeld_Left = setTo;
	}
	if (evt.keyCode == warrior.controlKeyRight){
		warrior.keyHeld_Right = setTo;
	}
	if (evt.keyCode == warrior.controlKeyUp){
		warrior.keyHeld_Down = setTo;
	}
	if (evt.keyCode == warrior.controlKeyDown){
		warrior.keyHeld_Up = setTo;
	}
}

function keyPressed(evt){
	//console.log("KeyPressed: "+evt.keyCode);
	keySet(evt, true, blueWarrior);
	evt.preventDefault();
}
function keyReleased(evt){
	//console.log("KeyReleased: "+evt.keyCode);
	keySet(evt, false, blueWarrior);
}