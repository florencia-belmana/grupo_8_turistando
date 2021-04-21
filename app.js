const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');


// Configuro el directorio de recursos estáticos
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


//app.get('/', (req, res) => {
  //  res.sendFile(path.join(__dirname, 'src/views/index.html'));
//})


//Rutas
//Main
const mainRouter = require('./src/routes/mainRouter');
app.use('/', mainRouter);

//Productos
const productsRouter = require('./src/routes/productsRouter');
app.use('/', productsRouter);

//Usuarios
const usersRouter = require('./src/routes/usersRouter');
app.use('/', usersRouter);
app.use('/user', usersRouter);
app.use('/users', usersRouter);

//Not found
app.use((req,res,next)=> {
  res.status(404).render("404")
})

// Iniciar el servidor
app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000.'));


