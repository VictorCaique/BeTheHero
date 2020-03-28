const express = require('express');
const ongsController = require('./controllers/ongsController');
const profileController = require('./controllers/profileController');
const incidentController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongsController.list);
routes.post('/ongs', ongsController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.list);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;