var express = require("express"); //retorna uma função
var app = express(); //executa a função
app.set('view engine', 'ejs')
app.set('views','../app/views')

module.exports = app;