var apiKey= "16a86ec9183c7dc12b1bf9dbdb6648331d241522";

function Github(userName) {
  this.user = userName;
}

Github.prototype.github = function(find) {
  var display=[];
  var username = $('#input1').val();
  $('#input1').val("");
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  return display;
};

exports.githubModule = Github;
