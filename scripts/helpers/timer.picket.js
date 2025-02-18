import { newGame } from '../utils/index.js';

const timerPicker = (event) => {
  const timeOption = event.target.closest('.time-option');

  if (timeOption) {
    const currentTimeOption = document.querySelector('.time-option.active');

    if (currentTimeOption) currentTimeOption.classList.remove('active');

    timeOption.classList.add('active');
    newGame();
  }
};

export { timerPicker };
