
var p1b = document.querySelector('#p1');
var p2b = document.getElementById('p2');
var p1d = document.querySelector('#d1');
var p2d = document.querySelector('#d2');
var p1Score = 0;
var p2Score = 0;
var gameOver= false;
var winScore = 5;
var resetBut = document.getElementById("reset");
var inp = document.querySelector("input");
var p = document.querySelector("p");
var winScoreDisplay = document.querySelector("p span");

p1b.addEventListener('click', function(){
	if(!gameOver) {
		p1Score++;
		if (p1Score === winScore){
			p1d.classList.add("winner");
			gameOver = true;
		}
		p1d.textContent = p1Score;

	}
})

p2b.addEventListener('click', function(){
	if(!gameOver) {
		p2Score++;
		if (p2Score === winScore){
			gameOver = true;
			p2d.classList.add("winner");
		}
		p2d.textContent = p2Score;
	}
})

resetBut.addEventListener("click", function(){
	resetAll();
})

 function resetAll() {
 	p1Score = 0;
	p2Score = 0;
	p1d.textContent = 0;
	p2d.textContent = 0;
	p1d.classList.remove("winner");
	p2d.classList.remove("winner");
	gameOver = false;
 }

inp.addEventListener("change", function(){
	resetAll();
	winScoreDisplay.textContent = this.value;
	winScore = +this.value;
})

		