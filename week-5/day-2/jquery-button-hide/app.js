// ready checks if the html has completed loading
$(document).ready(() => {

  // click - adds an 'click' event listener
  $("button").click(() => {
    $("p").hide(); // changes css to hide the p elements
    $("#myHeading").css('color', 'red')
  });
  
  // click - adds an 'dblclick' event listener
  $("button").dblclick(() => {
    $("p").show();
    $("#myHeading").css('color', 'green')
  });
});
