import express from 'express';
import historicoController from '../controllers/historicoController';

import competidorRoute from './competidoresRoutes/competidorRoute';
import pistasRoute from './pistasRoutes/pistasRoute';

const routes = express.Router();

// competidores
routes.use('/users', competidorRoute);

//pistas
routes.use('/pistas', pistasRoute);

// historicos da pista
routes.get('/historicos', historicoController.index);
routes.get('/historicos/:id', historicoController.show);
routes.post('/pistas/:id/historicos', historicoController.post);
routes.put('/historicos/edit/:id', historicoController.put);
routes.delete('/historicos/edit/:id', historicoController.delete);


export default routes;
