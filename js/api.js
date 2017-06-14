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
      /*take thhis to front end -start*/
      $("ul#show").append("<li>" + "Login Name:" + response.login + "</li>");
      $("ul#output").append("<ol>" + "Id:"+ response.id + "</ol>");
      $("ul#output").append("<ol>" + "Followers:" + response.followers + "</ol>");
      $("ul#output").append("<ol>" + "Following:" + response.following + "</ol>");
      $("ul#output").append("<ol>" + "Public Repos:output" + response.public_repos + "</ol>");
      $("ul#output").append("<ol>" + "Type:" + response.type + "</ol>");
      $("ul#output").append("<ol>" + "Email:" + response.email + "</ol>");
      $("ul#output").append("<ol>" + "Bio:" + response.bio + "</ol>");
      $("ul#output").append("<ol>" + "Blog:" + response.blog + "</ol>");
      $("ul#output").append("<ol>" + "Time Created:" + response.created_at + "</ol>");
      $("ul#output").append("<ol>" + "Location:" + response.location + "</ol>");
      $("ul#output").append("<ol>" + "Updated at:" + response.updated_at + "</ol>");

      /*take thhis to front end -end*/
  }).fail(function(error){
    console.log(error.responseJSON.message);    
  });

  return display;


};

exports.githubModule = Github;


/*var show = $('response').val();
      $('response').val("");
      $("#output").html(show);

      Object { login: "memetibryan", 
      id: 27344607, 
      avatar_url: "https://avatars0.githubusercontent.…", 
      gravatar_id: "", url: "https://api.github.com/users/memeti…", 
      html_url: "https://github.com/memetibryan", 
      followers_url: "https://api.github.com/users/memeti…", 
      following_url: "https://api.github.com/users/memeti…", 
      gists_url: "https://api.github.com/users/memeti…",*/