// color change example
let currentColour = 0;

function changeColour() {
    let colourArray = ['white', 'blue', 'red', 'green', 'yellow', 'orange'];
    
    if (currentColour === 5) {
        currentColour = 0;
    } else {
    currentColour++;
  }
  document.body.style.background = colourArray[currentColour];
}

// using getElementById()
// let helloWorldHead = document.getElementById('helloWorldHeader');
// helloWorldHead.style.fontSize = '10px';
// helloWorldHead.textContent = 'Goodbye World';

// using querySelector()
let helloWorldHead = document.querySelector('#helloWorldHeader');
helloWorldHead.style.fontSize = '10px';
helloWorldHead.textContent = 'Goodbye World';

//using EventListener()
let someElement = document.getElementById('eventListen');
someElement.addEventListener(
  'mouseover',
  (e) => (e.target.style.background = 'blue')
);

someElement.addEventListener(
  'mouseout',
  (e) => (e.target.style.background = 'white')
);

// counter example
function addCount() {
  const counter = document.querySelector('#counter-number');
  counter.textContent++;
}

// word count exercise
const wordCount = document.getElementById('wordCount');
function logValue(e) {
  wordCount.textContent = ' word count: ' + e.target.value.length;
}

const inputElement = document.querySelector('#inputExample');
inputElement.addEventListener('input', logValue);

// sum numbers exercise
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function sumNumbers() {
  result.textContent =
    'result: ' +
    num1.value +
    ' + ' +
    num2.value +
    ' = ' +
    (parseInt(num1.value) + parseInt(num2.value));
  num1.value = '';
  num2.value = '';
}
