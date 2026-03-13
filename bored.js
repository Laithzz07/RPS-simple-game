let win = 0,
  lose = 0,
  tie = 0;

function res(x) {
  let computerChoise = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoise);
  if (computerChoise === 1) {
    document.getElementById(`h1`).textContent = `Computer: ✊`;
    if (x === 1) {
      tie++;

      document.getElementById(`t`).textContent = `Ties: ${tie}`;
    } else if (x === 2) {
      win++;

      document.getElementById(`f`).textContent = `Wins: ${win}`;
    } else if (x === 3) {
      lose++;

      document.getElementById(`s`).textContent = `Losses ${lose}`;
    } else if (x === 0) {
      lose = 0;
      win = 0;
      tie = 0;
      document.getElementById(`f`).textContent = `Wins: ${win}`;
      document.getElementById(`s`).textContent = `Losses ${lose}`;
      document.getElementById(`t`).textContent = `Ties: ${tie}`;
      document.getElementById(`h1`).textContent = ``;
    }
  } else if (computerChoise === 2) {
    document.getElementById(`h1`).textContent = `Computer: ✋`;
    if (x === 1) {
      lose++;

      document.getElementById(`s`).textContent = `Losses ${lose}`;
    } else if (x === 2) {
      tie++;

      document.getElementById(`t`).textContent = `Ties: ${tie}`;
    } else if (x === 3) {
      win++;

      document.getElementById(`f`).textContent = `Wins: ${win}`;
    } else if (x === 0) {
      lose = 0;
      win = 0;
      tie = 0;
      document.getElementById(`f`).textContent = `Wins: ${win}`;
      document.getElementById(`s`).textContent = `Losses ${lose}`;
      document.getElementById(`t`).textContent = `Ties: ${tie}`;
      document.getElementById(`h1`).textContent = ``;
    }
  } else if (computerChoise === 3) {
    document.getElementById(`h1`).textContent = `Computer: ✌️`;
    if (x === 1) {
      win++;

      document.getElementById(`f`).textContent = `Wins: ${win}`;
    } else if (x === 2) {
      lose++;

      document.getElementById(`s`).textContent = `Losses ${lose}`;
    } else if (x === 3) {
      tie++;
      document.getElementById(`t`).textContent = `Ties: ${tie}`;
    } else if (x === 0) {
      lose = 0;
      win = 0;
      tie = 0;
      document.getElementById(`f`).textContent = `Wins: ${win}`;
      document.getElementById(`s`).textContent = `Losses ${lose}`;
      document.getElementById(`t`).textContent = `Ties: ${tie}`;
      document.getElementById(`h1`).textContent = ``;
    }
  }
}
function darkMood() {
  if (document.getElementById(`dark`).textContent === `🌕`) {
    document.getElementById(`dark`).textContent = `☀️`;
    document.body.style.backgroundColor = `hsl(0, 0%, 13%)`;
    document.body.style.transition = `200ms`;
    document.getElementById(`dark`).style.backgroundColor = `hsl(0, 0%, 71%)`;

    document.getElementById(`t`).style.color = `hsl(0, 0%, 100%)`;

    document.getElementById(`h1`).style.color = `hsl(0, 0%, 100%)`;
  } else {
    document.getElementById(`dark`).textContent = `🌕`;
    document.body.style.backgroundColor = `white`;
    document.getElementById(`dark`).style.backgroundColor = `hsl(0, 0%, 24%)`;

    document.getElementById(`t`).style.color = `hsl(0, 0%, 0%)`;

    document.getElementById(`h1`).style.color = `hsl(0, 0%, 0%)`;
  }
}
