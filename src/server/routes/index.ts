import {Request, Response, Router} from 'express';
import { cidadesController } from '../controllers';
import { cidadesMiddleware } from '../shared/middlewares';


const router = Router();

router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

// Retomar aqui API Rest, Node e Typescript: #15 - Setup completo do Jest com NodeJS e Typescript
router.get('/cidades',cidadesMiddleware.getAll,cidadesController.getAll);
router.get('/cidades/:id',cidadesMiddleware.getOne,cidadesController.getById);
router.post('/cidades',cidadesMiddleware.create,cidadesController.create);
router.put('/cidades/:id',cidadesMiddleware.update,cidadesController.updateById);
router.delete('/cidades/:id',cidadesMiddleware.deleteOne ,cidadesController.deete);




export { router };