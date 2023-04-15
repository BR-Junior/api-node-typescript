import {Request, Response, Router} from 'express';
import { cidadesController } from '../controllers';


const router = Router();

router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

router.get('/cidades',cidadesController.validationQuery,cidadesController.getAll);

router.post('/cidades',cidadesController.validationCreate,cidadesController.create);

router.post('/params/:id', (req:Request, res:Response) => {
  return res.status(200).json(req.params.id);
});

export { router };