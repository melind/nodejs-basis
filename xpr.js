var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l\'accueil');
});
app.get('/t', function(req, res) {//pas besoin de remettre app elaisser le . (.get) et enlever le ; de fin
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à t');
});


//app.get('/t/:etagenum/c', function(req, res) {
//res.setHeader('Content-Type', 'text/plain');
//res.send('Vous etes à ' + req.params.etagenum);
//}); //rend valide chemin suivant: /etage/1/chambre /etage/lll/chambre ....
//pas besoin de ?variable=valeur
//si on veut faire en sorte que ça marche qu'avec un nb faire en sorte d'afficher erreur 404
app.get('/t/:etagenum/c', function(req, res) {
res.render('c.ejs', {etagenum: req.params.etagenum});
});
app.use(function(req, res, next) {
  res.setHeader('content-Type', 'text/plain');
  res.status(404).send('page introuvable');
});
//!!!!mettre app.use ... 404 à la fin

app.listen(8080);

//middleware = app de express.js require l'app puis app.use
// !!! attention à l'ordre d'appel
//voir la doc pour l'utilisation
