/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Creating the phrase constructor class

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
// function to add the phrase to the display via creating li elements per each character
    addPhraseToDisplay() {
//creates the array to store the phrase letters inside
//console.log(this.phrase);
        let phraseArr = [];
        phraseArr = this.phrase.split('');
//target parent element
        let liParent = document.querySelector('ul');
//The phrase has been split into individual characters
//for each letter, create a li element and append it to the DOM
        //console.log(phraseArr);
        //console.log(liParent);
        phraseArr.forEach(character => {
            if (character === ' ') {
                const characterLi  = document.createElement('li');
                characterLi.className = 'space';
                characterLi.textContent = character;
                //console.log(characterLi)
                liParent.appendChild(characterLi);
//append li here
            } else {
                const characterLi = document.createElement('li');
                characterLi.className = 'letter';
                characterLi.textContent = character;
                //console.log(characterLi)
                liParent.appendChild(characterLi);
//replace this line appending li to DOM
            }
        });
    
    }
    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
    }   else {
        return false;
    }
};
//reveals letters in the phrase when guessed correctly
    showMatchedLetter(letter) {
       let nodeList = document.querySelectorAll('.letter');
       //console.log(nodeList); 
       nodeList.forEach(node => {
           //passed 2 conditionals, if checkLetter is true && the textContent of the node is the same as letter
        if (this.checkLetter(letter)) {
            if (node.textContent === letter) {
            //console.log('if');
            node.className = 'show';
            }
        }
       });
    }
 };



 
