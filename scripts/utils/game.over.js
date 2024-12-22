import { getWpm } from '../helpers/index.js';

const gameOver = (gameTime) => {
  clearInterval(window.timer);
  window.gameStart = null;
  document.getElementById('game-container').classList.add('over');
  document.getElementById('timer').innerHTML = `WPM: ${getWpm(gameTime)}`;
};

export { gameOver };
