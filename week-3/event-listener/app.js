document.body.style.backgroundColor = 'lightblue';
const magicDiv = document.getElementById('magicDiv');

function changeToWhite(event) {
  console.log('Event Object from javascript', event);
  console.log('Target of the event', event.target);
  // here we are able to select the HTML element based on where the event is being triggered from.
  const targetOfEvent = event.target;
  targetOfEvent.style.backgroundColor = 'white';
}

magicDiv.addEventListener('mouseout', changeToWhite);

magicDiv.addEventListener(
  'mouseover',
  () => (magicDiv.style.backgroundColor = 'lightgreen')
);
