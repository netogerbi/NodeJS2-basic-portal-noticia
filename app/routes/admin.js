module.exports = function (app) {

  app.get("/formulario-noticia", (req, res)=>{
    res.render("admin/form_add_noticia");
  });


  app.post("/noticias/salvar", (req, res)=>{
    const noticia = req.body;
    const conn = app.config.dbConnection()
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, conn, (error, result) => {
      res.redirect('/noticias')
    })


  });

}
