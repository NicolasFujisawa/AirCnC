const express = require('express');

const Multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();

const upload = Multer(uploadConfig);

// GET buscar algo do BE, POST criar algo do BE, PUT .. Editar , DELETE .. Deletar

//req.query = acessar query params,params é para filtrar na exibição da url (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, quanto edição)

//rotas

//cadastrar usuario.
routes.post('/sessions', SessionController.store);
//cadastrar spots
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
//listar spots com filtro
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);
//exportando esta routes
module.exports = routes;
