import {cidadesRepository} from '../../repositories/cidadesRepository/cidadesRepository';
import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

export const cidadeServiceGetAll = async (page: number, limit: number): Promise<ICidadesDTO[] | Error > => {

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