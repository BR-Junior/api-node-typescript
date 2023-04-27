import 'dotenv/config';
import { server } from './Server';
import {typeormConfig} from './typeormConfig';



const main = async ():Promise<void> => {
  await typeormConfig.initialize();
  console.log('Banco de dados rodando');

  server.listen(process.env.Port || 3333);
  console.log(`App rodando na porta ${process.env.PORT || 3333}`);
};
main();
// typeormConfig.initialize().then(() => {
//   console.log('Banco de dados rodando');
//
//   server.listen(process.env.Port || 3333, () =>
//     console.log(`App rodando na porta ${process.env.PORT || 3333}`));
//
// });