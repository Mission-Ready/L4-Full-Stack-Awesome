// $(document).ready(function(){
//   alert('jQuery is working');
// });

// 1.
// document.getElementById('mainContent').innerText = 'Hello there';
// $("#mainContent").text("Hello there");

// 2.
// const mainPara = document.getElementById('mainContent');
// mainPara.innerText = 'Hello there';

// const mainParaJ = $("#mainContent");
// mainParaJ.text("Hello there");

// 3.
// const mainPara = document.getElementById('mainContent');
// mainPara.innerText = mainPara.innerText + ' Sebin'; // Hello + Sebin

const mainParaJ = $('#mainContent');
// .text() method without any parameters gives you the existing element value
console.log('mainParaJ.text() is ', mainParaJ.text());
mainParaJ.text(mainParaJ.text() + ' Sebin');

// 4. Event listener - click

// changeColor is the event handler method
// function changeColorGreen() {
//   document.body.style.backgroundColor = 'green';
// }
/* Adding an 'click' event listener to the button. changeColorGreen() is called when the event happens
const buttonElement = document.getElementById('colorChangeButton');
buttonElement.addEventListener('click', changeColorGreen);
*/

// $('#colorChangeButton').click(changeColorGreen);

// 5. Event listener - Double click
function changeColorGreen() {
  document.body.style.backgroundColor = 'green';
}
function changeColorBlue() {
  document.body.style.backgroundColor = 'blue';
}

/*
    const buttonElement = document.getElementById('colorChangeButton');
    buttonElement.addEventListener('click', changeColorGreen);
    buttonElement.addEventListener('dblclick', changeColorBlue);
*/

$('#colorChangeButton').click(changeColorGreen);
$('#colorChangeButton').dblclick(changeColorBlue);

// 6. mouseenter & mouseleave
function changeColor() {
  $('body').css('backgroundColor', '#bc4672');
}

$('#ourBox').mouseenter(changeColor);

$('#ourBox').mouseleave(() => {
  $('body').css('backgroundColor', '#432c83');
/*
  selector {
    cssProperty: value,
    ......
    ......    
  }

  body {
    backgroundColor : #432c83
  }

*/
});

// 7. Show & Hide, Toggle
// display: block => display: none;

$('#hideButton').click(()=> {
  $('#ourBox').hide();
})

$('#showButton').click(()=> {
  $('#ourBox').show();
})

$('#toggleButton').click(()=>{
  // toggle the box visibility
  $('#ourBox').toggle();
})