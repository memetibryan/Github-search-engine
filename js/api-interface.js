var apiKey= "98f0c1b396a4e5d54f4d5fe561d54b44";

var username = $('#input1').val();
$('#input1').val("");
var xhr = new XMLHttpRequest();
xhr.getRepos = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        alert(xhr.responseText);
    }
};
xhr.open('GET', 'https://api.github.com/users/memetibryan'+'?access_token=e50c77c681b18ae5c8d01d7ce36f12509a7c143d' + apiKey, true);
xhr.send(XMLHttpRequest);


function Github(githubName) {
  this.github = githubName;
}

Github.prototype.searchName = function() {};
