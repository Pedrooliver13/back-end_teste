import express from 'express';

import competidorRoute from './competidoresRoutes/competidorRoute';
import pistasRoute from './pistasRoutes/pistasRoute';
import historicoRoute from './historicoRoutes/historicoRoute';

const routes = express.Router();

// competidores
routes.use('/users', competidorRoute);

// pistas
routes.use('/pistas', pistasRoute);

// historicos da pista
routes.use('/historicos', historicoRoute);

export default routes;
