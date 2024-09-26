// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function randomm(){

    n1 = Math.floor(Math.random()*100); 
    n2 = Math.floor(Math.random()*100);
}

// Iteration 3: Creating variables required to make the game functional

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let question = document.getElementById('question');


let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multi = document.getElementById('mul');
let divide = document.getElementById('divide');
let modulus = document.getElementById('modulus')


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3 = document.getElementById('number3');

let n3;

let score = 0;

localStorage.setItem('n3store', number3);

console.log(localStorage.getItem('n3store'))

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){

    randomm();

    let operatorArray = ["+","-","*","/","%"];
    let i = Math.floor(Math.random()*5)
    let randomOpr = operatorArray[i];

    console.log(randomOpr);

    switch(randomOpr){
        case "+":
            n3 = n1 + n2;
            break;
            
        case "-":
            n3 = Math.abs(n1-n2);
            break;

        case "*":
            n3 = n1 *n2;
            break;

        case "/":
            n3 = Math.floor(n1/n2);
            break;

        case "%":
            n3 = n1 % n2;
            break;
        
        default:
            randomise();
    }

    console.log(n1,randomOpr,n2,'=',n3, 'score',score)

    number1.innerHTML = n1;
    number2.innerHTML = n2;
    number3.innerHTML = n3;

}

randomise();


// Iteration 6: Making the Operators (button) functional

plus.addEventListener('click',() =>{
    if(n1 + n2 == n3){
        score++;
        randomise();
        clearInterval(timer)
        timer1();
    }else{
        console.log("Game Over");
        localStorage.setItem("score",score)
        location.href="./gameover.html"
    }
})

minus.addEventListener('click',() =>{
    if(Math.abs(n1-n2) == n3){
        score++;
        randomise();
        clearInterval(timer)
        timer1();     
    }else{
        console.log("Game Over");
        localStorage.setItem("score",score);
        location.href="./gameover.html"
    }
})

multi.addEventListener('click',() =>{
    if(n1 * n2 == n3){
        score++;
        randomise();
        timer1();     
    }else{
        console.log("Game Over");
        localStorage.setItem("score",score)
        location.href="./gameover.html"
    }
})

divide.addEventListener('click',() =>{
    if(Math.floor(n1/n2) == n3){
        score++;
        randomise();
        clearInterval(timer)
        timer1();     
    }else{
        console.log("Game Over");
        localStorage.setItem("score",score)
        location.href="./gameover.html"
    }
})

modulus.addEventListener('click',() =>{
    if(n1 % n2 == n3){
        score++;
        randomise();
        clearInterval(timer)
        timer1();     
    }else{
        console.log("Game Over");
        localStorage.setItem("score",score);
        location.href="./gameover.html"
    }
})


// Iteration 7: Making Timer functional
localStorage.setItem("score",score)
let time = document.getElementById("timer");
let timer;

function timer1(){

    t = 21;

     timer = setInterval(() => {
        t--;
        time.innerHTML=t;

        if ( t == 0 ){
            clearInterval(timer);
            location.href = "game.html"
        }
        
    }, 1000);
}

timer1()




