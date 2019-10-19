module.exports = (app) => {

  app.get("/noticia", (req, res) => {
    
    const conn = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticia((error, result) => {
      res.render("noticias/noticia", { noticia: result });
    })
  
  });
}
