'use strict';
// <div class="cell">1</div>
//       <div class="cell">2</div>
//       <div class="cell">3</div>
//       <div class="cell">4</div>
//       <div class="cell">5</div>
//       <div class="cell">6</div>
//       <div class="cell">7</div>
//       <div class="cell">8</div>
//       <div class="cell">9</div>
//       <div class="cell">10</div>
//       <div class="cell">11</div>
//       <div class="cell">12</div>
//       <div class="cell">13</div>

function myCreateElement(tag, ClassName, content) {
  const element = document.createElement(tag);
  element.classList.add(ClassName);
  element.append(content);
  return element;
}

const board = document.querySelector('.board');
console.log(board);

for (let i = 1; i < 101; i++) {
  const myElement = myCreateElement('div', 'cell', i);
  board.append(myElement);
}

const inputButton = document.querySelector('.btn-play');
console.log(inputButton);

inputButton.addEventListener('click', function () {
  console.log(inputButton, ' hai cliccato su play');
  if (inputButton !== null) {
    board.classList.add('active');
  }
});
