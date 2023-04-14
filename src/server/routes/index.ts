import {Request, Response, Router} from 'express';


const router = Router();

router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

router.post('/', (req:Request, res:Response) => {
  return res.status(200).json(req.body);
});

router.post('/params/:id', (req:Request, res:Response) => {
  return res.status(200).json(req.params.id);
});

export { router };