var Github = require('./../js/api.js').githubModule;

$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    var simpleGithub = new Github("hot pink");
    var output = simpleGithub.github(find);
    output.forEach(function(element) {
      $('#solution').append("<li>" + display + "</li>");
    });
  });
});

exports.githubModule = Github;
