const mysql = require('mysql')

const conn = function() {
  
  console.log('Conection created')
  
  return mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'portal_noticias'
  })

}

// está sendo criada uma função novamente para evitar o consign de executar a conexão com o bd no autoload
module.exports = function () {
  console.log('Conection module loaded')
  return conn
};