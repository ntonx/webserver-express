const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        let salida = {
            nombre: 'Antonio',
            edad: 22,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();


        //   res.write('hola mundo');
        //   res.end();
    })
    .listen(8080);
console.log('Escuchando en 8080');