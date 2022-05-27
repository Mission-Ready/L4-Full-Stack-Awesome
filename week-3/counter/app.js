let counterValue = 0;

function count() {
  counterValue++;
  const countElement = document.querySelector('#countDisplay');
  countElement.textContent = 'Counter: ' + counterValue;
}
