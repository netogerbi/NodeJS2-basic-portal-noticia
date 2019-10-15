var express = require("express"); //retorna uma função
var app = express(); //executa a função

app.set('view engine', 'ejs')
app.listen(3010, ()=> console.log("Servidor rodando com express"));


app.get("/",(request, response)=>{
    response.render("section/tecnology");
});

app.get("/tecnologia",(request,response)=>{
    console.log(request);
    response.send("<html><body>Notícias de Tecnologia</body></html>");
});