import { addClass, getWpm } from '../helpers/index.js';

const gameOver = (gameTime) => {
  clearInterval(window.timer);
  window.gameStart = null;
  addClass(document.getElementById('game-container'), 'over');
  document.getElementById('timer-info').innerHTML = `WPM: ${getWpm(gameTime)}`;
};

export { gameOver };
