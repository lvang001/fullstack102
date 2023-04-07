



const hands = ['rock', 'paper', 'scissors']

let playerOne = {
    Name: 'Joe',
    Hand: getHand()
}
let playerTwo = {
    Name: 'Bob',
    Hand: getHand()
}

var playerXwins = 0;
var playerYwins =0;
var gamesPlayed =0;


function getHand(){
    return hands[Math.floor(Math.random()*hands.length)];
}

function playRound(playerX,playerY) {
     if (playerX.Hand ===playerY.Hand) {
         gamesPlayed +=1;
         console.log('it is a tie')
     }else if (playerX.Hand =='rock' && playerY.Hand =='scissors'){
         gamesPlayed +=1;
         playerXwins +=1;
        console.log('Joe has rock; Bob has scissors: Joe Wins')
     }else if (playerX.Hand =='rock' && playerY.Hand =='paper'){
         gamesPlayed +=1;
         playerYwins +=1;
         console.log('Joe has rock; Bob has paper: Bob Wins')
     }else if (playerX.Hand =='paper' && playerY.Hand =='scissors'){
         gamesPlayed +=1;
         playerYwins +=1
        console.log('Joe has paper; Bob has scissors: Bob Wins')
    }else if (playerX.Hand =='paper' && playerY.Hand =='rock'){
        gamesPlayed +=1;
        playerXwins +=1;
        console.log('Joe has paper; Bob has rock: Joe Wins')
    }else if (playerX.Hand =='scissors' && playerY.Hand =='paper'){
        gamesPlayed +=1;
        playerXwins +=1;
        console.log('Joe has scissors; Bob has paper: Joe Wins')
    }else {
        gamesPlayed +=1;
        playerYwins +=1;
        console.log ('Joe has scissors; Bob has rock: Bob Wins')
    }
}

function playGame(player1,player2,playUntil) {
    while(playerXwins<playUntil && playerYwins<playUntil) {
        playRound(player1,player2);
        playGame(player1,player2,playUntil);
    }
}

function rockPaperScissors () {
    playGame(playerOne,playerTwo,3)
    if (playerXwins>playerYwins) {
        console.log ('Joe wins')
    }else if (playerXwins<playerYwins) {
        console.log ('Bob wins')
    }else {
        console.log ('tie game')
    }
}


// rockPaperScissors()
playGame(playerOne,playerTwo,5)




// playRound(playerOne,playerTwo);