//range variables
let min;
let max;

//get html elements as js objects
	const skinButton = document.getElementById("skin");
	const vibrantButton = document.getElementById("vibrant");
	const pastelsButton = document.getElementById("pastels");
	const roygbivButton = document.getElementById("roygbiv");
	skinButton.addEventListener("click", () => chooseColorType('skin'));
	vibrantButton.addEventListener("click", () => chooseColorType('vibrant'));
	pastelsButton.addEventListener("click", () => chooseColorType('pastels'));
	roygbivButton.addEventListener("click", () => chooseColorType('roygbiv'));

//add event listener to button with callback function


//callback function for event: Button click
function chooseColorType(key){
	//if statement or switch for number range
	if(key.toString() == 'skin'){
		min = 1;
		max = 5;
	}
	else if(key.toString() == 'vibrant'){
		min = 6;
		max = 11;
	}
	else if(key.toString() == 'pastels'){
		min = 12;
		max = 17;
	}
	else if(key.toString() == 'roygbiv'){
		min = 18;
		max = 27;
	}
	View.color(min, max);
	View.printRGB();
}
	
//logic with variables
//The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max){
	 min2 = Math.ceil(min);
	 max2 = Math.floor(max);
	 return Math.floor(Math.random() * (max2 - min2 + 1) + min2); 
}

//get min and max parameters method
function getMin(){
	return this.min;
}
function getMax(){
	return this.max;
}
