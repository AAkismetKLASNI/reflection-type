import { words } from '../data.js';
import { getRandomWord } from '../helpers/index.js';

const newGame = () => {
  if (window.timer) {
    clearInterval(window.timer);
    window.timer = null;
    window.gameStart = null;
    document.getElementById('game-container').classList.remove('over');
  }

  document.getElementById('timer').innerHTML =
    document.querySelector('.time-option.active')?.innerHTML;
  document.getElementById('words').innerHTML = '';
  document.getElementById('words').style.marginTop = '0';

  for (let i = 0; i <= 100; i++) {
    document.getElementById('words').innerHTML += getRandomWord(words);
  }

  document.getElementById('restart-button-container').style.opacity = '1';
  document.getElementById('logo-container').style.opacity = '1';
  document.getElementById('timer-picker').style.opacity = '1';
  document.getElementById('cursor').style.top = '5px';
  document.getElementById('cursor').style.left = '5px';
  document.getElementById('cursor').style.animation = 'blink 1s infinite';
  document.querySelector('.word').classList.add('current');
  document.querySelector('.letter').classList.add('current');
};

export { newGame };
