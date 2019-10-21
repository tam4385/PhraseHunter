/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //creating game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrase = this.createPhrase();
        this.activePhrase = null;
}
//function to return
createPhrase() {
    const phrase = [
        new Phrase ('The Matrix'),
        new Phrase ('Pulp Fiction'),
        new Phrase ('True Romance'),
        new Phrase ('Pocahontas'),
        new Phrase ('Rounders')];
    return phrase;
}
//Code snippet to generate a random number and attach it to the phrase array
getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * this.phrase.length);
    //console.log(randomNumber); 
    return this.phrase[randomNumber];
}
startGame () {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}  
checkForWin() {
    let nodeList = document.querySelectorAll('.letter');
    //console.log(nodeList);
    let winCon = 0;
    nodeList.forEach(node => {
        if (node.className !== 'show') {
            winCon += 1;
            //console.log(winCon);
        }
    });
        if (winCon > 0) {
            return false;
        } else {
            return true;
        };
    

}
//removes lives when the player guesses incorrectly
removeLife() {
    let lives = document.querySelectorAll('img');
    //console.log(lives);
    lives[this.missed].src="images/lostHeart.png";
    this.missed += 1;

    if (this.missed === 5) {
        //console.log('Game Over');
        // const overlay = document.getElementById('overlay');
        // const heading = document.getElementById('game-over-message');
        // //console.log(overlay);
        // overlay.className = 'lose';
        // overlay.style.display = 'flex';
        // heading.textContent = 'GAME OVER';
        this.gameOver(false);
    }
}
//changes the overlay based on the result of the game
gameOver(boolean) {
    const overlay = document.getElementById('overlay');
    const heading = document.getElementById('game-over-message');
    if (boolean === true) {
        //console.log('true if');
        overlay.style.display = 'flex';
        overlay.className = 'win';
        heading.textContent = 'That\'a boy!';
        this.resetGame();

    } else {
        console.log('else');
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        heading.textContent = 'Better luck next time!';
        this.resetGame();
    }
}
//resets the game state after completion
resetGame () {
    //removing the phrase letters
    let liParent = document.querySelector('ul');
    let phraseLetters = document.querySelectorAll('ul li')
    //console.log(phraseLetters);
    phraseLetters.forEach(letter => {
        liParent.removeChild(letter);
    
    //remove disabled classes of keys
    let keys = document.querySelectorAll('#qwerty button');
    keys.forEach(key => {
        key.className = 'key';
        key.disabled = false;
    });
    
    //resetting lives images
    let lives = document.querySelectorAll('img');
    lives.forEach(live => {
        live.src="images/liveHeart.png"
    });

    //console.log(keys);
    
    });
}
 //method that provides game functionality- linked with app.js eventlistener
handleInteraction(button) {
    let clicked = button
    //console.log(clicked);
    clicked.disabled = true;

    if (this.activePhrase.checkLetter(clicked.textContent)) {
        //console.log('checked Letter');
        this.activePhrase.showMatchedLetter(clicked.textContent);
        clicked.className = 'chosen';
        this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver(true);
                
            }
        
        
     } else {
        clicked.className = 'wrong';
        this.removeLife();
            
        
     }
     }
}
