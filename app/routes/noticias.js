module.exports = (app) => {

  app.get("/noticias", (req, res) => {
    
    const conn = app.config.dbConnection()
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticias(conn, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    })

  });
}
