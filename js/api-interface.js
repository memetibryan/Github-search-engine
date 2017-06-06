var Github = require('./../js/api.js').githubModule;

$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    var simpleGithub = new Github("");
    var output = simpleGithub.github(find);
    output.forEach(function(display) {
      $('#output').append("<li>" + display + "</li>");
    });
  });
});
