const express = require("express");
const consign = require('consign');
const app = express();
app.set('view engine', 'ejs')

consign().include('./app/routes').into(app)

// set deve receber o caminha a partir da raiz, pois está a variavel app está sendo criada em app.js na raiz do projeto
app.set('views','./app/views') 

module.exports = app;