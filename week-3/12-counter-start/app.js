let count = 0;

function addCount() {
  count++;
  const counterElement = document.querySelector('h1');
  counterElement.innerText = 'Counter : ' + count;
}