const path = require('path');
const express = require('express');
const app = express();

// Configuro el directorio de recursos estáticos
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//app.get('/', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'src/views/index.html'));
//})


// Iniciar el servidor
app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000.'));


//Rutas

const mainRouter = require('./src/routes/mainRouter');

app.use('/', mainRouter);

const productsRouter = require('./src/routes/productsRouter');

app.use('/', productsRouter);

