import express from 'express';
import pistaController from '../../controllers/pistaController';
import historicoController from '../../controllers/historicoController';

const routes = express.Router();

routes.get('/', pistaController.index);
routes.get('/:id', pistaController.show);
routes.post('/', pistaController.post);
routes.put('/edit/:id', pistaController.put);
routes.delete('/edit/:id', pistaController.delete);

export default routes;
