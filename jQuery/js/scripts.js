/*business interface*/
function number(number){
  this.number=number;
}

/*user interface*/
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    $("ul").empty();
    event.preventDefault();
    var number = parseInt($("input#ping").val());

    for (index = 1; index <= number; index++)
      if (index % 3 === 0 && index % 5 === 0) {
        $("ul#output").append("<li>pingpong</li>");

      } else if (index % 3 === 0) {
      $("ul#output").append("<li>ping</li>");

    } else if (index % 5 === 0) {
      $("ul#output").append("<li>pong</li>");

    } else {
      $("ul#output").append("<li>" + index + "</li>");
    }
  });
});
