const handleCursor = () => {
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');

  // console.log({
  //   y: nextLetter.getBoundingClientRect().height,
  //   x: nextLetter.getBoundingClientRect().width,
  // });
  // console.log({
  //   top: nextLetter.getBoundingClientRect().top,
  //   left: nextLetter.getBoundingClientRect().left,
  // });

  cursor.style.top =
    (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
  cursor.style.left =
    (nextLetter || nextWord).getBoundingClientRect()[
      nextLetter ? 'left' : 'right'
    ] + 'px';
};

export { handleCursor };
