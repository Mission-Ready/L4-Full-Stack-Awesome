const buttonElement = document.querySelector('button');

// Adding a listener on that element
buttonElement.addEventListener('click', calculateSum);

function calculateSum() {
  const num1String = document.querySelector('#num1').value;
  const num2String = document.querySelector('#num2').value;
  const num1 = parseInt(num1String);
  const num2 = parseInt(num2String);
  const result = num1 + num2;
  updateResult(result);
}

function updateResult(result) {
  const resultElement = document.querySelector('p');
  resultElement.innerText = 'Result : ' + result;
}

const updateResult = (result) => {
  const resultElement = document.querySelector('p');
  resultElement.innerText = 'Result : ' + result;
}
