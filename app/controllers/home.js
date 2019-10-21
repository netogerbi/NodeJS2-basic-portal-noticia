module.exports.index = function(app, req, res) {
  const conn = app.config.dbConnection()
  const noticiasModel = new app.app.models.NoticiasDAO(conn)

  noticiasModel.get5Last(function (error, result) {
    res.render("home/index", {noticias: result});
  })

  
}