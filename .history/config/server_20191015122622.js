var express = require("express"); //retorna uma função
var app = express(); //executa a função
app.set('view engine', 'ejs')
app.listen(3010, ()=> console.log("Servidor rodando com express"));
app.set('views','../app/views')

module.exports = app;