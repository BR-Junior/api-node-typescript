import {pessoasRepository} from '../../../database/repositories/pessoaRepository';
import { IPessoaFindDTO } from '../DTO/IPessoaDTO';

export const pessoaUseCaseFindAll = async (page:number, limit:number): Promise<IPessoaFindDTO[] | Error > => {

  try {
    const result = await pessoasRepository.find({
      relations: {cidade:true},
      order: {id: 'asc'},
      skip: (page -1) * limit,
      take: limit
    });

    return [...result];

  }catch (err) {
    console.log(err);

    return Error('Erro ao atualizar registro!');
  }
};