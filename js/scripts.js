$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age >= 21) {
    $("#drinks").show();
  } else if (age === 21) {
    alert("Happy birthyear! Go crazy!")
  } else {
    $("#under-21").show();
  }
});