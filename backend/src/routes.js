const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/* routes.get('/', (request, response) => {
    return response.send('<h1>essa é a home</h1>')
}) */
routes.post('/session', SessionController.create);
routes.get('/ongs', OngController.index);

/* rota de criação de ongs */
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;