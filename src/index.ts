import 'dotenv/config';
import { server } from './server/Server';
import {typeormConfig} from './typeormConfig';




typeormConfig.initialize().then(() => {
  console.log('Banco de dados rodando');

  server.listen(process.env.Port || 3333, () =>
    console.log(`App rodando na porta ${process.env.PORT || 3333}`));

});