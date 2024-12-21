import { addClass } from './add.class.js';
import { removeClass } from './remove.class.js';

const handleLetter = (currentLetter, currentWord, expected, key) => {
  if (currentLetter) {
    addClass(currentLetter, expected === key ? 'correct' : 'incorrect');
    removeClass(currentLetter, 'current');
    if (currentLetter.nextSibling) {
      addClass(currentLetter.nextSibling, 'current');
    }
  } else {
    const allExtraLetters = document.querySelectorAll(
      '.word.current .letter.extra'
    );

    if (allExtraLetters.length > 5) return;

    const extraLetter = document.createElement('span');
    extraLetter.innerHTML = key;
    extraLetter.className = 'letter extra';
    currentWord.appendChild(extraLetter);
  }
};

export { handleLetter };
