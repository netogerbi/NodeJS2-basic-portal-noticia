const app = require('./config/server')
const rotasNoticias = require('./app/routes/noticia')(app)


app.listen(3010, ()=> console.log("Servidor rodando com express"));