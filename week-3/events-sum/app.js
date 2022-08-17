const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', calculateSum);

function calculateSum() {
  console.log('Hello World');
  const num1String = document.querySelector('#num1').value;
  const num2String = document.querySelector('#num2').value;
  const num1Int = parseInt(num1String);
  const num2Int = parseInt(num2String);
  
  const resultElement = document.querySelector('span');
  resultElement.innerText = num1String + " + " + num2String + " = " 
  resultElement.innerText = resultElement.innerText + (num1Int + num2Int);
}
