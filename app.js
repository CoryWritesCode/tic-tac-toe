let boxes = document.querySelectorAll('.box');
let tLeft = document.getElementById('top-left');
let tCenter = document.getElementById('top-center');
let tRight = document.getElementById('top-right');
let mLeft = document.getElementById('middle-left');
let mCenter = document.getElementById('middle-center');
let mRight = document.getElementById('middle-right');
let bLeft = document.getElementById('bottom-left');
let bCenter = document.getElementById('bottom-center');
let bRight = document.getElementById('bottom-right');
let winnerIs = document.getElementById("winnerCircle");
let anywhere = document.getElementById('board');

let x = 0;
let w = 0;
let gameOver = 0;
let c = 0;

function isEven(x) {
   return x % 2 == 0;
};

function isOdd(x) {
   return Math.abs(x % 2) == 1;
};

boxes.forEach(function(box) {
  box.addEventListener('click', boxClicked, true);
});

anywhere.addEventListener('click', itOver, true);

function boxClicked(box) {
  // if (c < 11) {
  //   itOver()
    if (w) {
      box.textContent += '';
    } else if (isEven(x)) {
      if (box.target.textContent != 'O') {
        x++;
        c++;
        box.target.textContent = 'X';
        checkForWinner();
      }
    } else {
      if (box.target.textContent != 'X') {
        x++;
        c++;
        box.target.textContent = 'O';
        checkForWinner();
      };
    };
  // };
};


function checkForWinner() {
  let tRow = (tLeft.textContent + tCenter.textContent + tRight.textContent);
  let mRow = (mLeft.textContent + mCenter.textContent + mRight.textContent);
  let bRow = (bLeft.textContent + bCenter.textContent + bRight.textContent);
  let lColumn = (tLeft.textContent + mLeft.textContent + bLeft.textContent);
  let cColumn = (tCenter.textContent + mCenter.textContent + bCenter.textContent);
  let rColumn = (tRight.textContent + mRight.textContent + bRight.textContent);
  let fSlash = (tLeft.textContent + mCenter.textContent + bRight.textContent);
  let bSlash = (tRight.textContent + mCenter.textContent + bLeft.textContent);
  var pWins = [tRow, mRow, bRow, lColumn, cColumn, rColumn, fSlash, bSlash];
  for (var i = 0; i < pWins.length; i++) {
  // pWins.forEach(function(possibleWins) {
    if (gameOver == 1) {
      winnerIs.textContent += '';
      boxes.textContent =+ '';
      itOver();
      gameOver++;
    } else if (pWins[i] === 'XXX') {
      winnerIs.textContent += 'And the winner is... X!';
      gameOver++;
      w++;
      return true;
    } else if (pWins[i] === 'OOO') {
      winnerIs.textContent += 'And the winner is... O!';
      gameOver++;
      w++;
      return true;
    };
  };
   if (c == 9 && w !== true) {
    winnerIs.textContent += 'Looks like we have a draw!';
    gameOver = 3;
    c++;
  };
};

function itOver() {
  if (gameOver === 1) {
    window.location.reload();
  } else if (gameOver === 3) {
    window.location.reload();
  };
};
