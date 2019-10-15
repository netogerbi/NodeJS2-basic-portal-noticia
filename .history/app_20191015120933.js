var express = require("express"); //retorna uma função
var app = express(); //executa a função

app.set('view engine', 'ejs')
app.listen(3010, ()=> console.log("Servidor rodando com express"));


app.get("/",(req, res)=>{
  res.render("home/index");
});

app.get("/admin",(req, res)=>{
  res.render("admin/form_add_noticia");
});


app.get("/noticias",(req, res)=>{
  res.render("noticias/noticias");
});