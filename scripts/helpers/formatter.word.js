const formatterWord = (word) => {
  return `<div class="word"><span class="letter">${word
    .split('')
    .join('</span><span class="letter">')}</span></div>`;
};

export { formatterWord };
