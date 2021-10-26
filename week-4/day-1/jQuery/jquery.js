// select a html element
const myElement = $('#someElement');
myElement.text(myElement.text() + ' and some text');

// add a click event
const textToChangeElement = $('#textToChange')
function changeText() {
    textToChangeElement.text('The text has changed')
}
$('#changeTextButton').dblclick(changeText)

// mouseenter
const mouseenterElement = $('#mouseenterElement');
mouseenterElement.mouseenter(() => mouseenterElement.text('The element is being hovered over'));
mouseenterElement.mouseleave(() => mouseenterElement.text('The element is not being hovered on'))

// show/hide element on the page
$("#hide").click(() => $('#contentToHide').hide(1000))
$("#show").click(() => $('#contentToHide').show(1000))

$('#toggle').click(() => $('#contentToHide').toggle(1000))

// element with animation
const elementWithAnimation = $('#animationElement')
elementWithAnimation.click(() => elementWithAnimation.animate({fontSize: '50px', background: 'green', color: 'white'}))

// change css on click
const changeCSS = $('#changeCSS')
changeCSS.click(() => changeCSS.css({'background': 'yellow', 'fontSize': '50px'}))