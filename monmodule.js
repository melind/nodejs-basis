var direBonjour = function() {
  console.log('Bonjour !');
}
var direByeBye = function() {
  console.log('Bye bye !');
}

exports.direBonjour = direBonjour; //exports.nomquelonveut = à l'objet dans var (nomquelonveut=nomdelafonction)
exports.direByeBye = direByeBye;
