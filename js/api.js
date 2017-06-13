var apiKey = require ('./../.env').apiKey;

function Github(userName) {
  this.user = userName;
}

Github.prototype.github = function(find) {
  var display=[];
  var username = $('#input1').val();
  $('#input1').val("");
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $("ul#output").append("<ol>" + username + "-" + "Github details:-" + "check console "+ "</ol>");
  }).fail(function(error){
    console.log(error.responseJSON.message);    
  });

  return display;


};

exports.githubModule = Github;


/*var show = $('response').val();
      $('response').val("");
      $("#output").html(show);*/