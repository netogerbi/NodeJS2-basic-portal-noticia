module.exports = (app) => {

  app.get("/noticia", (req, res) => {
    
    const conn = app.config.dbConnection()
    
    const query = 'SELECT * FROM noticias WHERE id_noticias=2;'
    conn.query(query, (error, result) => {
      res.render("noticias/noticia", { noticia: result });
    })
  });
}
