// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from 'supertest';
import { server } from '../src/server/Server';
import {typeormConfig} from '../src/typeormConfig';

beforeAll(async () => {
  await typeormConfig.initialize();
});


export const testServer = supertest(server);