const input = document.getElementById('word');
const btnFind = document.getElementById('btn-find');
const btnReset = document.getElementById('btn-reset');
const resultContainer = document.getElementById('result');

let finalResult = 0;

data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8,
};

btnFind.addEventListener('click', getNumber);
btnReset.addEventListener('click', resetAll);

function getNumber() {
  let sum = 0;
  const word = removeSpaces(input.value.split(''));

  for (let i = 0; i < word.length; i++) {
    sum = sum + parseInt(data[word[i]]);
  }
  if (sum > 9) {
    redoNumber(sum);
  } else {
    finalResult = sum;
    renderResult();
  }
}

function removeSpaces(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] != ' ') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function redoNumber(num) {
  let number = 0;
  const numString = num.toString().split('');
  for (let i = 0; i < numString.length; i++) {
    number = number + parseInt(numString[i]);
  }
  if (number > 9) {
    redoNumber(number);
  } else {
    finalResult = number;
    renderResult();
  }
}

function resetAll() {
  input.value = '';
  resultContainer.innerHTML = '';
}

function renderResult() {
  resultContainer.innerHTML = `<p>${finalResult}</p>`;
}
