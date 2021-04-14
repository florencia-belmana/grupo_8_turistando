const path = require('path');
const express = require('express');
const app = express();

// Configuro el directorio de recursos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
})


// Atajamos todas las rutas que no existen
app.get('*', (req, res) => {
    res.send('¿Te perdiste?');
});

// 3. El servidor

// Iniciar el servidor
app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000.'));



//Rutas

const mainRouter = require('./src/routes/mainRouter');


app.use('/', mainRouter);
