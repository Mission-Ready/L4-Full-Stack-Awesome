// function changeColor() {
//   if (document.body.style.backgroundColor === 'blue') {
//     document.body.style.backgroundColor = 'white';
//   } else {
//     document.body.style.backgroundColor = 'blue';
//   }
// }

// let currentColorIndex = 0;

// function changeColor() {
//   const colorArray = ['white', 'blue', 'purple', 'green', 'yellow', 'orange'];

//   // lastIndex is normally the (length of the string - 1)
//   if (currentColorIndex === (colorArray.length - 1)) {
//     currentColorIndex = 0;
//   } else {
//     currentColorIndex++;
//   }
//   document.body.style.backgroundColor = colorArray[currentColorIndex];
// }

const helloWorldHead = document.getElementById('helloWorldHeader');
// const helloWorldHead = document.querySelector('#helloWorldHeader');
// const helloWorldHead = document.getElementsByTagName('h1')[0]; // Returns and array of all h1 elements. [0] => selects the first. 
// const helloWorldHead = document.querySelector('h1');

helloWorldHead.style.fontSize = '10px';
helloWorldHead.textContent = 'Today is a good day !';
