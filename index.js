let card = []
let sum = 0
let hasBlackjack =false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let start =  document.getElementById("start")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("card")
let newBtn = document.getElementById("new")

let player = {
    playerName: "Asad",
    playerBet: "145"
}
let playerEl = document.getElementById("playerEl");
playerEl.textContent = player.playerName + ": $" + player.playerBet;

function randomCard(){
    let randomCard = Math.floor(Math.random()* 13) + 1;
    if(randomCard ===1 ){
        return 11;
    }else if(randomCard >10){
        return 10;
    }else{
    return randomCard;
    }
}

start.addEventListener('click',startGame);
function startGame(){
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards =[firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Card: ";

for (let i = 0; i<cards.length; i++){
    cardsEl.textContent+= cards[i] + " ";
}
    if (sum<=20){
        message = "Do you want to draw a new Card? 🙂";
    }else if(sum===21){
        message = "Whoo...You got a blackjack! 😎";
        hasBlackjack = true;
    }else{
        message = "Ops..You are out of the Game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}


newBtn.addEventListener('click', function(){
    if(isAlive && !hasBlackjack){
        let newCard = randomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
    }
})