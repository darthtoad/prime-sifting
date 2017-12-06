$(document).ready(function(){
  $("#theForm").submit(function() {
    debugger;
    event.preventDefault();
    $("#result").empty();
    var number = parseInt($("input#number").val());
    var primes = [];
    console.log(number);
    for (var j = 1; j <= number; j++) {
      if (j === 1) {
        primes.push(1)
      } else {
        var prime = true;
        for (var i = 2; i <= (j / 2); i++) {
          if (j % i === 0) {
            prime = false;
          }
        }
        if (prime) {
          primes.push(j)
        }
      }
    }
    var result = primes.join(", ");
    $("#result").append(result);
  })
})
