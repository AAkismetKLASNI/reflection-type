const handleSpace = (currentLetter, currentWord, expected) => {
  if (currentWord.firstChild === currentLetter) return;

  if ([...currentWord.classList].includes('extra'))
    currentWord.classList.remove('extra');

  if (expected !== ' ') {
    const incorrectLetters = [
      ...document.querySelectorAll(
        '.word.current .letter:not(.correct, .incorrect)'
      ),
    ];

    incorrectLetters.forEach((letter) => letter.classList.add('incorrect'));
    currentLetter.classList.remove('current');
    currentWord.classList.add('extra');
  }

  currentWord.classList.remove('current');
  currentWord.nextSibling.classList.add('current');
  currentWord.nextSibling.firstChild.classList.add('current');

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
