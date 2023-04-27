import {pessoasRepository} from '../../../database/repositories/pessoaRepository';


export const pessoaUseCaseDelete = async (id:number): Promise<void | string > => {

  try {
    const result = pessoasRepository.delete(id);

    if (result) result;

    return Error('Erro ao apagar o registro').message;

  }catch (err) {

    console.log(err);

    return Error('Erro ao cadastrar o registro!').message ;
  }

};