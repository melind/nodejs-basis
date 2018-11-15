var http = require('http');// appel la bibliotheque http(dans http.js) de nodejs= PERMET creation server web
var url = require('url');
var querystring = require('querystring');
//.createServer() = CREATION server
var server = http.createServer(function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {"Content-Type":"text/plain"});//200=code de l entete http= ok au navigateur(norme http) suivi d'un parametre de type MIME qui informe quel type de donnée on envoie
  if ('prenom' in params && 'nom' in params) {
    res.write('Vous vous appelez' + params['prenom'] + ' ' + params['nom']);
  }
  else {
    res.writeHead(404, {"Content-Type":"text/plain"});
    res.write('erreur code 404');
  }

  res.end(); //envoi un msge de notre choix et aussi termine reponse et permet l'envoi
});
//server.on('close', function() {//écoute event close
  //console.log('bye bye !');
//});
var EventEmitter = require('events').EventEmitter;//appel bbliotheque events pour creer emetteur d'events se basant sur bbl event
var jeu = new EventEmitter(); //renome jeu l'emetteur d'event
jeu.on('gameover', function(message, cri){
  console.log(message, cri);
});
jeu.emit('gameover', 'vous avez perdu !', 'rrrr');//ici emit déclanche l'event
//res = requete visitor(page web) & res = reponse visiteur (code html)
server.listen(8080);//on demarre le server, pas besoin d'un port pour marcger mais autre port que le 80reserver pour serveur web mais à utiliser si mise en production
//server.close();// déclenche event close
