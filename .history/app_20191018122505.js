const app = require('./config/server')
const rotasNoticias = require('./app/routes/noticia')(app)
const rotasHome = require('./app/routes/home')(app)
const rotasfrmNoticias = require('./app/routes/formulario-noticias')(app)
app.listen(3010, (listener)=> console.log("Servidor rodando com express pela porta " + listener.address().port));