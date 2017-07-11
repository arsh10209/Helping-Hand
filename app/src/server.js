var express = require('express');
var app = express();
var root=process.cwd();
//your routes here
app.use(express.static('html'));
app.get('/', function (req, res) {
    res.sendFile("html/index.html",{root});
});
app.get('/profile.html', function (req, res) {
    res.sendFile("html/profile.html",{root});
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
