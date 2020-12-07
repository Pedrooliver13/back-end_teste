import express from 'express';
import userController from '../controllers/userController';
import historicoController from '../controllers/historicoController';
import pistaController from '../controllers/pistaController';

const routes = express.Router();

// competidores
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.post);
routes.put('/users/edit/:id', userController.put);
routes.delete('/users/edit/:id', userController.delete);

// historicos da pista
routes.get('/historicos', historicoController.index);
routes.get('/historicos/:id', historicoController.show);
routes.post('/pistas/:id/historicos', historicoController.post);
routes.put('/historicos/edit/:id', historicoController.put);
routes.delete('/historicos/edit/:id', historicoController.delete);

// pista
routes.get('/pistas', pistaController.index);
routes.get('/pistas/:id', pistaController.show);
routes.post('/pistas', pistaController.post);
routes.put('/pistas/edit/:id', pistaController.put);
routes.delete('/pistas/:id', pistaController.delete);

export default routes;
