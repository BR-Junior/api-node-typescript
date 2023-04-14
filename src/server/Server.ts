// o sistema não está reconhesendo do "import express" no lugar ele reconheceu o "import type from 'express'"
//  outro mode usar o expree é "import e  = require('express')"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type from 'express';
import { Request, Response } from 'express';


const server = type();


server.get('/', (req:Request, res:Response) => {
  return res.send('Hello word!');
});


export { server };