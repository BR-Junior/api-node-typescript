import { cidadesRepository } from '../../../database/repositories/cidadeRepository';
import { ICidadeDTO } from '../DTO/ICidadesDTO';

export const cidadeUseCaseFindAll = async (page:number, limit:number): Promise<ICidadeDTO[] | Error > => {

  try {
    const result = await cidadesRepository.find({
      select: {name:true, id:true},
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