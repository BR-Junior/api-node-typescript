import { cidadesRepository } from '../../models/repositories/cidadeRepository';
import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

export const cidadeUseCaseFindAll = async (page:number, limit:number): Promise<ICidadesDTO[] | Error > => {

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