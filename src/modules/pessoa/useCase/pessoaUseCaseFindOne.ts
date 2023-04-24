import { cidadesRepository } from '../../../database/repositories/cidadeRepository';
import { ICidadeDTO } from '../DTO/ICidadesDTO';

export const pessoaUseCaseFindOne = async (id:number): Promise<ICidadeDTO | Error > => {

  try {
    const result = await cidadesRepository.findOneBy({id:id});

    if (result) return result;

    return Error('Registro não encontrado');

  }catch (err) {
    console.log(err);

    return Error('Erro ao atualizar registro!');
  }
};