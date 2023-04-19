// o sistema não está reconhesendo do "import express" no lugar ele reconheceu o "import type from 'express'"
//  outro mode usar o expree é "import e  = require('express')"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type from 'express';
import 'dotenv/config';
import { router } from './routes';


const server = type();

server.use(type.json());

server.use(router);

export { server };
