module.exports.noticias = function (app, req, res) {
  const conn = app.config.dbConnection()
  const noticiasModel = new app.app.models.NoticiasDAO(conn);

  noticiasModel.getNoticias((error, result) => {
    res.render("noticias/noticias", { noticias: result });
  })
}

module.exports.noticia = function (app, req, res) {
  const conn = app.config.dbConnection()
  const noticiasModel = new app.app.models.NoticiasDAO(conn);

  const id_noticia = req.query.id_noticia

  noticiasModel.getNoticia(id_noticia, (error, result) => {
    res.render("noticias/noticia", { noticia: result });
  })

}