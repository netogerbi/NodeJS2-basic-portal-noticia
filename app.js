const app = require('./config/server')
const listener = app.listen(3010, ()=> console.log("Servidor rodando com express"));
console.log("Porta: " + listener.address().port)