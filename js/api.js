var apiKey= "d307eb3968d7e4973d5bcabff5a96039";

$(document).ready(function() {
  $('#button1').click(function() {
  var username = $('#input1').val();
    $('#input1').val("");
      $.get('https://api.github.com/users/' + username + '?access_token=e50c77c681b18ae5c8d01d7ce36f12509a7c143d' + apiKey).then(function(response){
        console.log(JSON.stringify(response));
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
  });
});
