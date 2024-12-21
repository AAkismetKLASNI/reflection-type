import { addClass } from './add.class.js';
import { removeClass } from './remove.class.js';

const handleSpace = (currentLetter, currentWord, expected) => {
  if (expected !== ' ') {
    const incorrectLetters = [
      ...document.querySelectorAll(
        '.word.current .letter:not(.correct, .incorrect)'
      ),
    ];

    incorrectLetters.forEach((letter) => addClass(letter, 'incorrect'));
    removeClass(currentLetter, 'current');
    addClass(currentWord, 'extra');
  }

  removeClass(currentWord, 'current');
  addClass(currentWord.nextSibling, 'current');
  addClass(currentWord.nextSibling.firstChild, 'current');

  // move letter

  if (
    document.querySelector('.word.current').getBoundingClientRect().top > 450
  ) {
    const words = document.getElementById('words');
    const margin = parseInt(words.style.marginTop || '0px');
    words.style.marginTop = margin - 52 + 'px';
  }
};

export { handleSpace };
