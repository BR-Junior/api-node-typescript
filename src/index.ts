import { server } from './server/Server';

server.listen(process.env.Port || 3333, () =>
  console.log(`App rodando na porta ${process.env.PORT || 3333}`));