module.exports = function (app) {

  app.get("/formulario-noticia", (req, res)=>{
    res.render("admin/form_add_noticia");
  });


  app.post("/noticias/salvar", (req, res)=>{
    const noticia = req.body;
    const conn = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
      // todo post deve ter um redirect por convenção
      res.redirect('/noticias')
    })


  });

}
