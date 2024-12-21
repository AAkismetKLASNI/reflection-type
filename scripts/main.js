import {
  handleLetter,
  handleSpace,
  handleBackspace,
  handleTimer,
  handleCursor,
} from './helpers/index.js';
import { newGame } from './utils/index.js';

const gameTime = Number(document.getElementById('timer-info').innerHTML) * 1000;
window.timer = null;
window.gameStart = null;

newGame(gameTime);

document.getElementById('restart-button-container').onclick = () =>
  newGame(gameTime);
document.getElementById('logo-container').onclick = () => newGame(gameTime);
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

  if (!window.timer && isLetter) handleTimer(gameTime);

  if (isLetter) handleLetter(currentLetter, currentWord, expected, key);

  if (isSpace) handleSpace(currentLetter, currentWord, expected);

  if (isBackSpace) handleBackspace(currentLetter, currentWord, isFirstLetter);

  handleCursor();
};
