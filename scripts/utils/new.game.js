import { words } from '../data.js';
import { getRandomWord, addClass, removeClass } from '../helpers/index.js';

const newGame = (gameTime) => {
  if (window.timer) {
    clearInterval(window.timer);
    window.timer = null;
    window.gameStart = null;
    removeClass(document.getElementById('game-container'), 'over');
  }

  document.getElementById('timer-info').innerHTML = gameTime / 1000;

  document.getElementById('words').innerHTML = '';

  for (let i = 0; i <= 100; i++) {
    document.getElementById('words').innerHTML += getRandomWord(words);
  }

  addClass(document.querySelector('.word'), 'current');
  addClass(document.querySelector('.letter'), 'current');
};

export { newGame };
