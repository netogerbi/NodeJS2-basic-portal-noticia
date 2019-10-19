module.exports = function (app) {

  app.get("/formulario-noticia", (req, res)=>{
    res.render("admin/form_add_noticia");
  });


  app.post("/noticias/salvar", (req, res)=>{
    const noticia = req.body;

    req.assert('titulo', 'O título é obgrigatório').notEmpty();
    req.assert('resumo', 'O resumo é obgrigatório').notEmpty();
    req.assert('titulo', 'O resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'O autor é obgrigatório').notEmpty();
    req.assert('data_noticia', 'A data é obgrigatória').notEmpty().isDate({fomat: 'YYYY-MM-DD'});
    req.assert('noticia', 'A notícia é obgrigatória').notEmpty();

    const errors = req.validationErrors();

    
    if(errors) {

      res.render("admin/form_add_noticia", { invalid: errors });
      return;
    
    }


    const conn = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
      // todo post deve ter um redirect por convenção
      res.redirect('/noticias')
    })


  });

}
