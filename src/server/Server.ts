// o sistema não está reconhesendo do "import express" no lugar ele reconheceu o "import type from 'express'"
//  outro mode usar o expree é "import e  = require('express')"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type from 'express';
import { Request, Response } from 'express';
import 'dotenv/config';



const server = type();
server.use(type.json());


server.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

server.post('/', (req:Request, res:Response) => {
  return res.status(200).json(req.body);
});

server.post('/params/:id', (req:Request, res:Response) => {
  return res.status(200).json(req.params.id);
});



export { server };