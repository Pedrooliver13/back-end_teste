import express from 'express';
import pistaController from '../../controllers/pistaController';

const routes = express.Router();

routes.get('/', pistaController.index);
routes.get('/:id', pistaController.show);
routes.post('/', pistaController.post);
routes.put('/edit/:id', pistaController.put);
routes.delete('/:id', pistaController.delete);

export default routes;