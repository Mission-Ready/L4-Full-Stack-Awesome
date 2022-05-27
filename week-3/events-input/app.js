function updateCount(event) {
  const inputElement = event.target;
  const lengthOfInputText = inputElement.value.length;
  showUpdatedCount(lengthOfInputText);
}

// Just updates the count value with that from the parameter passed
function showUpdatedCount(count) {
  const countDisplayElement = document.querySelector('h1');
  countDisplayElement.innerText = "Word count : " + count;
}

// Adding the event using the addEventListener method  
const inputElement = document.querySelector('input');
inputElement.addEventListener('input', updateCount);
