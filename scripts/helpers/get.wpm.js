const getWpm = (gameTime) => {
  const words = [...document.querySelectorAll('.word')];
  const lastTypedWord = document.querySelector('.word.current');
  const lastTypedWordIndex = words.indexOf(lastTypedWord);
  const typedWords = words.slice(0, lastTypedWordIndex + 1);

  let allCorrectLetters = 0;

  typedWords.forEach((word) => {
    const letters = [...word.children];

    letters.forEach(
      (letter) => letter.classList[1] === 'correct' && allCorrectLetters++
    );
  });

  return Math.round((allCorrectLetters / 5 / gameTime) * 60000);
};

export { getWpm };
