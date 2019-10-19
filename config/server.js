const express = require("express")
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express();
app.set('view engine', 'ejs')

// set deve receber o caminha a partir da raiz, pois está a variavel app está sendo criada em app.js na raiz do projeto
app.set('views','./app/views') 

app.use(bodyParser.urlencoded({ extended: true })) // verificar o que é o extended

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app)



module.exports = app;