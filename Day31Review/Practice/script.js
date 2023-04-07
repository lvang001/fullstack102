let rock = 'Rock';
let scissors = 'Scissors'
let paper = 'Paper'

//prompt users for names
let nameOne='';
function playerOneName() {
    let nameOne = prompt('Please enter name');
    document.querySelector('.playerOne').innerText=nameOne;
    return nameOne;
}
let nameTwo='';
function playerTwoName() {
    let nameTwo = prompt('Please enter name');
    document.querySelector('.playerTwo').innerText=nameTwo;
    return nameTwo;
}

let playerOneRock = document.querySelector('.rockPlayerOne')
playerOneRock.addEventListener('click',function() {

})

//functions for player One
let rockOne='';
function displayRockOne() {
    let rockOne = document.querySelector('.textAreaOne').innerText =rock;
    return rockOne;
}
let paperOne='';
function displayPaperOne() {
    let paperOne = document.querySelector('.textAreaOne').innerText =paper;
    return paperOne;
}
let scissorsOne='';
function displayScissorsOne() {
    let scissorsOne =document.querySelector('.textAreaOne').innerText =scissors;
    return scissorsOne;
}

//functions for player Two
var rockTwo='';
function displayRockTwo() {
    let rockTwo = document.querySelector('.textAreaTwo').innerText =rock;
    return rockTwo;
    
}
let paperTwo='';
function displayPaperTwo() {
    let paperTwo = document.querySelector('.textAreaTwo').innerText =paper;
    return paperTwo;
}

 function displayScissorsTwo() {
    let scissorsTwo = document.querySelector('.textAreaTwo').innerText =scissors;
    return scissorsTwo;
}

function playGame() {
//    let scissorsTwo= displayScissorsTwo();
//    let rockTwo=displayRockTwo();
  if(document.querySelector('.textAreaOne').innerText.value=== document.querySelector('.textAreaTwo').innerText.value) {
    document.querySelector('.textAreaThree').innerText ='tie'
  }

//    if (scissorsTwo==paperOne) {
//        document.querySelector('.textAreaThree').innerText ='tie'
//    }
   
    
}
function test () {
    let playerTwoRock = document.querySelector('.rockPlayerTwo').value;
    return playerTwoRock
}
function askNames () {
    playerOneName();
   playerTwoName(); 
}