const handleLetter = (currentLetter, currentWord, expected, key) => {
  if (currentLetter) {
    currentLetter.classList.add(expected === key ? 'correct' : 'incorrect');
    currentLetter.classList.remove('current');

    if (currentLetter.nextSibling) {
      currentLetter.nextSibling.classList.add('current');
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
