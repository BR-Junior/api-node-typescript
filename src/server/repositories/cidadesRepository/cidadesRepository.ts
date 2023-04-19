import { typeormConfig } from '../../../typeormConfig';
import { Cidade } from '../../models/Cidades';


export const cidadesRepository = typeormConfig.getRepository(Cidade);