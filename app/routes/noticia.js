module.exports = (app) => {

  app.get("/noticias", (req, res) => {
    
    const conn = app.config.dbConnection()
    
    const query = 'SELECT * FROM noticias;'
    conn.query(query, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    })
  });
}
