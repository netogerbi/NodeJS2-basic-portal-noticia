module.exports = function (app) {

  app.get("/formulario-noticia", (req, res)=>{
    res.render("admin/form_add_noticia");
  });


  app.post("/noticias/salvar", (req, res)=>{
    const noticias = req.body;
    res.send(noticias); // sem o body pareser, o express nao consegue recuperar o body
  });

}
