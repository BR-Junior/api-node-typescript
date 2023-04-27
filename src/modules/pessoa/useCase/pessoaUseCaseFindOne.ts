import { pessoasRepository } from '../../../database/repositories/pessoaRepository';
import { IPessoaFindDTO } from '../DTO/IPessoaDTO';

export const pessoaUseCaseFindOne = async (id:number): Promise<IPessoaFindDTO | Error > => {

  try {
    const result = await pessoasRepository.findOne({
      where:{id:id},
      relations:{cidade:true}
    });

    if (result) return result;

    return Error('Registro não encontrado');

  }catch (err) {
    console.log(err);

    return Error('Erro ao atualizar registro!');
  }
};