const app = require('./config/server')

// const rotasNoticias = require('./app/routes/noticia')(app)
// const rotasHome = require('./app/routes/home')(app)
// const rotasfrmNoticias = require('./app/routes/formulario-noticias')(app)

const listener = app.listen(3010, ()=> console.log("Servidor rodando com express"));
console.log("Porta: " + listener.address().port)