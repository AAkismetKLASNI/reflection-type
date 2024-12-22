import {
  handleLetter,
  handleSpace,
  handleBackspace,
  handleTimer,
  handleCursor,
  timerPicker,
} from './helpers/index.js';
import { newGame } from './utils/index.js';

window.timer = null;
window.gameStart = null;

document.getElementById('game-container').onkeyup = (event) => {
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const key = event.key;
  const expected = currentLetter?.innerHTML || ' ';
  const isLetter = key.length === 1 && key !== ' ';
  const isSpace = key === ' ';
  const isBackSpace = key === 'Backspace';
  const isFirstLetter = currentLetter === currentWord.firstChild;

  if (document.querySelector('#game-container.over')) return;

  if (!window.timer && isLetter) handleTimer();

  if (isLetter) handleLetter(currentLetter, currentWord, expected, key);

  if (isSpace) handleSpace(currentLetter, currentWord, expected);

  if (isBackSpace) handleBackspace(currentLetter, currentWord, isFirstLetter);

  handleCursor();
};

document.getElementById('timer-picker').onclick = timerPicker;
document.getElementById('restart-button-container').onclick = newGame;
document.getElementById('logo-container').onclick = newGame;

newGame();
