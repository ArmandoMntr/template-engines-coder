const express = require('express');
const Apip = require('./api/productos');
const productos = new Apip()
const handlebars = require('express-handlebars');

const app = express(); 
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine(
    'hbs',                    
    handlebars({              
        extname: 'hbs',                
        defaultLayout: 'index.hbs',         
        layoutsDir: __dirname + './views',   
    })
);

app.set('views', './views');
app.set('view engine', 'hbs');

// app.get('/', (request, response) => {
//     response.render('index')
// });

// app.post('/productos', async (request, response) => {
//     const prod = await productos.save(request.body);
//     response.redirect('/')
// });

// app.get('/productos', async (request, response) => {
//     const product = await productos.all();
//     response.render('productos', {product})
// })


// const server = app.listen(PORT, () => {
//     `Server escuchando en ${server.address().port}`
// });

// server.on('error', err => console.log(err));