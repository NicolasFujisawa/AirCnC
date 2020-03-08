//Biblioteca do node Express
const express = require('express');
//Importar mongoose
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
//Importa routes
const routes = require('./routes');

const app = express();

//Connect com MongoDB
mongoose.connect('mongodb+srv://NicolasF:KoXRzDkAThTMa9Vh@aircnc-vn36c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//app usa JSON
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../uploads')));
app.use(routes);

app.listen(3333);