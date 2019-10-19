module.exports = (app) => {

  app.get("/noticias", (req, res) => {
    
    const conn = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias((error, result) => {
      res.render("noticias/noticias", { noticias: result });
    })

  });
}
