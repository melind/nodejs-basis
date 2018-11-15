var monmodule = require('./monmodule');//recup ttes les fonction dans monmodule
monmodule.direBonjour();//use une des fonctions dans monmondule
monmodule.direByeBye();

var markdown = require('markdown').markdown;
console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
