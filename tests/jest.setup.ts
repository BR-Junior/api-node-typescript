// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from 'supertest';
import { server } from '../src/server/Server';

export const testServer = supertest(server);