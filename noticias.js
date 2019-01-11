const http = require('http');

http.createServer((request,response) =>{
    let categoria = request.url;
    console.log("Categoria", categoria)
    if(categoria == "/tecnologia"){
        response.end("<html><body>Notícias de Tecnologia</body></html>");
    }else if(categoria=="/moda"){
        response.end("<html><body>Notícias de Moda</body></html>");
    }else{
        response.end("<html><body>Portal de Notícias</body></html>");
    }

}).listen(3010);


//npm init -> package.json