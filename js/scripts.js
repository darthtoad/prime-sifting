$(document).ready(function(){
  $("#theForm").submit(function() {
    debugger;
    event.preventDefault();
    var prime = true;
    var number = parseInt($("input#number").val());
    console.log(number);
    for (var i = 2; i <= (number / 2); i++) {
      if (number % i === 0) {
        prime = false;
      }
    }
    if (prime === true && number !== 1 && number > 0) {
      alert(number + " is a prime number");
    } else {
      alert(number + " is not a prime number");
    }
  })
})
