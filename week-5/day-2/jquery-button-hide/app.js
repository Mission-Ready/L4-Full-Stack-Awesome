$(document).ready(() => {
  
  $("button").click(() => {
    $("p").hide();
    $("#myHeading").css('color', 'red')
  });

  $("button").dblclick(() => {
    $("p").show();
    $("#myHeading").css('color', 'green')
  });
});
