import express from 'express';
import historicoController from '../../controllers/historicoController';

const routes = express.Router();

routes.get('/', historicoController.index);
routes.get('/:id', historicoController.show);
routes.post('/', historicoController.post);
routes.put('/edit/:id', historicoController.put);
routes.delete('/edit/:id', historicoController.delete);

// arquivo pistaControllers
// routes.post('/pistas/:id/historicos', historicoController.post);

export default routes;
