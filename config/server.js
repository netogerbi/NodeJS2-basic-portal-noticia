const express = require("express")
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express();
app.set('view engine', 'ejs')

// set deve receber o caminha a partir da raiz, pois está a variavel app está sendo criada em app.js na raiz do projeto
app.set('views','./app/views') 

app.use(bodyParser.urlencoded({ extended: true })) // verificar o que é o extended
app.use(expressValidator()) //adicionando o validator como middleware - v3.2 express validator

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app)

module.exports = app;