module.exports = (app) => {

  app.get("/noticia", (req, res) => {
    
    const conn = app.config.dbConnection()
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticia(conn, (error, result) => {
      res.render("noticias/noticia", { noticia: result });
    })
  
  });
}
