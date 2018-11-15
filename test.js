var express = require('express');

var app = express();
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l\'accueil');
});

app.get('/compteur/:n', function(req, res) {
  var noms = ['Robert', 'Jacques', 'David'];
  res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});
app.listen(8080);

//tjs mettre app.get / avant de commencer
