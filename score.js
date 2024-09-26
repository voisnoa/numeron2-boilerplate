// Iteration 8: Making scoreboard functional

let score1 = localStorage.getItem('score');

console.log(score1);


let play = document.getElementById('play-again-button');

document.getElementById('score-board').innerHTML = score1;

play.addEventListener('click' , ()=>{
    localStorage.setItem('score',0);
    location.href = "game.html"
})

