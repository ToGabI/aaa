const WIDTH = 460;
const HEIGHT = 259;

let target = {
	x: getRandomNumber(WIDTH), 
	y: getRandomNumber(HEIGHT)
};


let $map = document.getElementById("map");
let text = document.getElementById("distance");


$map.addEventListener('click' , function (e){
	let distance = getDistance(e, target);
	console.log(distance);
	text.innerHTML = getDistanceHint(distance);
})