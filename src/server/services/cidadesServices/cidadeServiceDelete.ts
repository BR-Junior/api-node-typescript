import { cidadesRepository } from '../../repositories/cidadesRepository/cidadesRepository';


export const cidadeServiceDelete = async (id:number): Promise<void | string > => {

  try {
    const result = cidadesRepository.delete(id);

    if (result) result;

    return Error('Erro ao apagar o registro').message;

  }catch (err) {

    console.log(err);

    return Error('Erro ao cadastrar o registro!').message ;
  }

};