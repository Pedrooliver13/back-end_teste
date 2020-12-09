import express from 'express';
import pistaController from '../../controllers/pistaController';
import historicoController from '../../controllers/historicoController';

const routes = express.Router();

routes.get('/', pistaController.index);
routes.get('/:id', pistaController.show);
routes.post('/', pistaController.post);
routes.put('/edit/:id', pistaController.put);
routes.delete('/:id', pistaController.delete);

// Criando historico 
routes.post('/:id/historicos', historicoController.post);

export default routes;