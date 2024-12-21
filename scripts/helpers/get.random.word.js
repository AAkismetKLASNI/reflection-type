import { formatterWord } from './formatter.word.js';

const getRandomWord = (words) => {
  const randomIndex = Math.floor(Math.random() * words.length);

  return formatterWord(words[randomIndex]);
};

export { getRandomWord };
