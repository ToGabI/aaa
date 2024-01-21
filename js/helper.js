let getRandomNumber = (size) =>{
	return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
	let diffx = e.offsetX - target.x;
	let diffy = e.offsetY - target.y;

	return Math.sqrt((diffx * diffx) + (diffy * diffy));
}


let getDistanceHint = (distance) => {
	if (distance < 10){
		alert('Ganaste');
		return "Encontraste el tesoro!"
	}
	if (distance < 30) {
		return "Ardiendo"
	} else if (distance < 50){
		return "Muy caliente"
	} else if (distance < 60){
		return "Caliente"
	} else if (distance < 100){
		return "Tibio"
	} else if (distance < 150){
		return "Frio"
	} else {
		return "Helado"
	};
}