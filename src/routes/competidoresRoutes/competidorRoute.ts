import express from 'express';
import userController from '../../controllers/userController';

const routes = express.Router();

routes.get('/', userController.index);
routes.get('/:id', userController.show);
routes.post('/', userController.post);
routes.put('/edit/:id', userController.put);
routes.delete('/edit/:id', userController.delete);

export default routes;