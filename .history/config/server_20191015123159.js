var express = require("express");
var app = express();
app.set('view engine', 'ejs')

// set deve receber o caminha a partir da raiz, pois está a variavel app está sendo criada em app.js na raiz do projeto
app.set('views','./app/views') 

module.exports = app;