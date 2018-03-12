var colors = randomColorArray(6);
var squares = document.querySelectorAll(".square");
var guess = document.querySelector("#color");
var paragraph = document.querySelector("span");
var colorToGuess = colors[Math.round(Math.random()*5)];
var resetBtn = document.querySelector(".newgame");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
//color to guess in top
guess.innerText = colorToGuess;
//color squares with random colors
for(i = 0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}
//game logic
for (var i = 0; i <squares.length; i++) {
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === colorToGuess){
			paragraph.innerText = "Nice!";
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = colorToGuess;
			}
			document.querySelector(".top").style.backgroundColor = colorToGuess;
			resetBtn.innerText = "PLAY AGAIN?";
		} else{
			this.style.backgroundColor = "#232323";
			paragraph.innerText = "Try Again!";
		}
	})
}
//new game
resetBtn.addEventListener("click", function(){
	if(hard.classList[1]){
		hardMode();
		topSectionStart();
	} else{
		easyMode();
		topSectionStart();
	}
});
//easy
easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	//run easy mode
	easyMode();
	//top section start style
	topSectionStart();
});
//hard
hard.addEventListener("click", function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	//generate new colors
	hardMode();
	//top section start style
	topSectionStart();
});
//newcolorsgenerate
function randomColorArray(x){
	var r; 
	var g;
	var b;
	var colors = [];
	for (var i = 0; i < x; i++) {
		r = Math.round(Math.random()*255);
		g = Math.round(Math.random()*255);
		b = Math.round(Math.random()*255);
		colors[i] = `rgb(${r}, ${g}, ${b})`;
	}
	for (var i = 0; i < colors.length; i++) {
		for(var j = i + 1; j < colors.length; j++){
			if(colors[i]===colors[j]){
				r = Math.round(Math.random()*255);
				g = Math.round(Math.random()*255);
				b = Math.round(Math.random()*255);
				colors[j] = `rgb(${r}, ${g}, ${b})`;
			}
		}
	}
	return colors;
};

function topSectionStart(){
	document.querySelector(".top").style.backgroundColor = "rgb(66, 181, 196)";
	resetBtn.innerText = "NEW COLORS";
	paragraph.innerText = "";
};

function easyMode(){
	//generate new colors
	colors = randomColorArray(3);
	//pick new color to guess
	colorToGuess = colors[Math.round(Math.random()*2)];
	guess.innerText = colorToGuess;
	//color squares with random colors and hide second row
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
};

function hardMode(){
	//generate new colors
	colors = randomColorArray(6);
	//pick new color to guess
	colorToGuess = colors[Math.round(Math.random()*5)];
	guess.innerText = colorToGuess;
	//color squares with random colors
	for(i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
};