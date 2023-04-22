import { typeormConfig } from '../../../typeormConfig';
import { Cidade } from '../../models';


export const cidadesRepository = typeormConfig.getRepository(Cidade);