let currentColour = 0;
function changeBackground() {
    let colourArray = ['white', 'blue', 'red', 'green', 'yellow', 'orange'];
    
    currentColour++;
    document.body.style.background = colourArray[currentColour];
}

const myElement = document.querySelectorAll('.myClass');
console.log(myElement)

myElement[0].style.fontSize = '14px';
myElement[0].innerHTML = '<a>World</a>';
myElement[0].textContent = 'Goodbye World';

let count = 0;
function addCount() {
    const myCounter = document.getElementById('counter-number');

    //safer way
    myCounter.textContent = count++;
    
    //cleaner way
    // myCounter.textContent++;
}




function changeColour(event) {
    console.log(event.target)

    event.target.style.background = 'blue';
}

let listener1 = document.getElementById('eventListen')
let listener2 = document.getElementById('anotherListener')

listener1.addEventListener('mouseover', changeColour);
listener1.addEventListener('mouseout', (e) => e.target.style.background = 'white');

listener2.addEventListener('mouseover', changeColour);
listener2.addEventListener('mouseout', (e) => e.target.style.background = 'white');

const inputElement = document.getElementById('firstInputField')
inputElement.addEventListener('input', (e) => {
    console.log(e.target.value)
    console.log('something else')
})
