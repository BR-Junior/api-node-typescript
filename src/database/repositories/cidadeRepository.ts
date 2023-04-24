import { typeormConfig } from '../../typeormConfig';
import { Cidade } from '../index';


export const cidadesRepository = typeormConfig.getRepository(Cidade);