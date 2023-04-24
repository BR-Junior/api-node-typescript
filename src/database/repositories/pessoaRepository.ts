import { typeormConfig } from '../../typeormConfig';
import { Pessoa } from '../index';


export const pessoasRepository = typeormConfig.getRepository(Pessoa);