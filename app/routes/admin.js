module.exports = function (app) {

  app.get("/formulario_noticia", (req, res)=>{
    app.app.controllers.admin.formulario_noticia(app, req, res)
  });


  app.post("/noticias/salvar", (req, res)=>{
    app.app.controllers.admin.noticias_salvar(app, req, res)
  });

}
