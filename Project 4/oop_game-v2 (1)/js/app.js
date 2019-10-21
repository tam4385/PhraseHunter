/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;

 //event listener on the btn reset html button
 const startButton = document.getElementById('btn__reset');
 //
 startButton.addEventListener('click', (e) => {
    //console.log('eventListener');
   
    game = new Game;
    game.startGame();
 })

 
 const letterKeys = document.getElementById('qwerty');
 //console.log(letterKeys);

letterKeys.addEventListener('click', (event) => {
   
   if (event.target.className === 'key') {
      game.handleInteraction(event.target);   
   }
});