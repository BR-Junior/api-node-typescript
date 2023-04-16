import {Request, Response, Router} from 'express';
import { cidadesController } from '../controllers';


const router = Router();

router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

// Retomar aqui API Rest, Node e Typescript: #15 - Setup completo do Jest com NodeJS e Typescript
router.get('/cidades',cidadesController.validationQuery,cidadesController.getAll);
router.get('/cidades/:id',cidadesController.validationGetById,cidadesController.getById);
router.post('/cidades',cidadesController.validationCreate,cidadesController.create);
router.put('/cidades/:id',cidadesController.validationUpdateByIdParams,cidadesController.validationUpdateByIdBody,cidadesController.updateById);
router.delete('/cidades/:id',cidadesController.deete);




export { router };