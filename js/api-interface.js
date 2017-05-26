var Github = require('./../js/api.js').githubModule;

$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    $('#button1').click(function() {
    var simpleGithub = new Github("new user");
    var output = simpleGithub.github(find);
    output.forEach(function(display) {
      $('#output').append("<li>" + username + "</li>");
    });
    });
  });
});
