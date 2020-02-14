const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/json', function(req, res) {
    //res.send('Hola Mundo')
    let salida = {
        nombre: 'antoniO',
        edad: 22,
        url: req.url
    };

    res.send(salida);
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'antonio'
    });
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        nombre: 'antonio nicolas'
    });
});

app.listen(port, () => {
    console.log(`escuchando peticiones en puerto ${port}`);
});