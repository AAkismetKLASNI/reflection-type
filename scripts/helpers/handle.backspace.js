const handleBackspace = (currentLetter, currentWord, isFirstLetter) => {
  if (currentLetter && isFirstLetter) {
    if (!currentWord.previousSibling) return;

    currentWord.classList.remove('current');
    currentLetter.classList.remove('current');

    currentWord.previousSibling.classList.add('current');

    if ([...currentWord.classList].includes('extra'))
      currentWord.classList.remove('extra');

    if ([...currentWord.previousSibling.lastChild.classList].includes('extra'))
      return;

    currentWord.previousSibling.lastChild.classList.add('current');
    currentWord.previousSibling.lastChild.classList.remove(
      'correct',
      'incorrect'
    );
  }

  if (currentLetter && !isFirstLetter) {
    currentLetter.classList.remove('current');
    currentLetter.previousSibling.classList.add('current');
    currentLetter.previousSibling.classList.remove('correct', 'incorrect');
  }

  if (!currentLetter) {
    if ([...currentWord.lastChild.classList].includes('extra')) {
      currentWord.lastChild.remove();
      return;
    }

    currentWord.lastChild.classList.add('current');
    currentWord.lastChild.classList.remove('correct', 'incorrect');
  }
};

export { handleBackspace };
