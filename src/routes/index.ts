import {Request, Response, Router} from 'express';
import { cidadeController, cidadeValidation } from '../modules/cidade';
import {pessoaControllers} from '../modules/pessoa';


const router = Router();

router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

// Retomar aqui API Rest, Node e Typescript: #15 - Setup completo do Jest com NodeJS e Typescript
router.post('/cidades',cidadeValidation.cidadeCreate,cidadeController.cidadeCreate);
router.get('/cidades/', cidadeValidation.cidadeFindAll, cidadeController.cidadeFindAll,);
router.get('/cidades/:id',cidadeValidation.cidadeFindOne,cidadeController.cidadeFindOne);
router.put('/cidades/:id',cidadeValidation.cidadeUpdate,cidadeController.cidadeUpdate);
router.delete('/cidades/:id',cidadeValidation.cidadeDelete ,cidadeController.cidadeDelete);

router.post('/pessoa', pessoaControllers.pessoaCreate);




export { router };