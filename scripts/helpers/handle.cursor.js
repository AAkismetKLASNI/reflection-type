const handleCursor = () => {
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');

  cursor.style.top = `${
    (nextLetter || nextWord).getBoundingClientRect().top -
    cursor.parentNode.offsetTop +
    2
  }px`;

  cursor.style.left = `${
    (nextLetter || nextWord).getBoundingClientRect()[
      nextLetter ? 'left' : 'right'
    ] - cursor.parentNode.offsetLeft
  }px`;
};

export { handleCursor };
