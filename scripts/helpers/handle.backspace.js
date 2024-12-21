import { addClass } from './add.class.js';
import { removeClass } from './remove.class.js';

const handleBackspace = (currentLetter, currentWord, isFirstLetter) => {
  if (currentLetter && isFirstLetter) {
    if (!currentWord.previousSibling) return;

    removeClass(currentWord, 'current');
    addClass(currentWord.previousSibling, 'current');
    removeClass(currentLetter, 'current');
    addClass(currentWord.previousSibling.lastChild, 'current');

    removeClass(currentWord.previousSibling, 'extra');
    removeClass(currentWord.previousSibling.lastChild, 'incorrect');
    removeClass(currentWord.previousSibling.lastChild, 'correct');
  }

  if (currentLetter && !isFirstLetter) {
    removeClass(currentLetter, 'current');
    addClass(currentLetter.previousSibling, 'current');
    removeClass(currentLetter.previousSibling, 'incorrect');
    removeClass(currentLetter.previousSibling, 'correct');
  }

  if (!currentLetter) {
    if (currentWord.lastChild.className.includes('extra')) {
      console.log('del', currentWord.lastChild.textContent);
      currentWord.lastChild.remove();
    } else {
      addClass(currentWord.lastChild, 'current');
      removeClass(currentWord.lastChild, 'incorrect');
      removeClass(currentWord.lastChild, 'correct');
    }
  }
};

export { handleBackspace };
