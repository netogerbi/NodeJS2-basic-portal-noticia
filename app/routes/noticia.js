module.exports = (app) => {

  app.get("/noticias",(req, res)=>{
    
  const mysql = require('mysql')

  const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'portal_noticias'
  })

  const query = 'SELECT * FROM noticias;'
  conn.query(query, (error, result) => {
    res.send(result)
  })

//    res.render("noticias/noticias");
  });
}
