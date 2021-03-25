initControls();

function initControls(){
	const skinButton = document.getElementById("skin");
	const vibrantButton = document.getElementById("vibrant");
	const pastelsButton = document.getElementById("pastels");
	const roygbivButton = document.getElementById("roygbiv");
	skinButton.addEventListener("click", () => chooseColorType('skin'));
	vibrantButton.addEventListener("click", () => chooseColorType('vibrant'));
	pastelsButton.addEventListener("click", () => chooseColorType('pastels'));
	roygbivButton.addEventListener("click", () => chooseColorType('roygbiv'));
}