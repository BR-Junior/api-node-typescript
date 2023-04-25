import { ICidadesRequestDTO } from '../DTO/ICidadesDTO';
import { cidadesRepository } from '../../../database/repositories/cidadeRepository';




export const cidadeUseCaseCreate = async (data: Omit<ICidadesRequestDTO, 'id'>): Promise<number | Error > => {
  const find = await cidadesRepository.findOneBy({name: data.name});
  try {
    if (find?.name == data.name) {
      return Error('Cidade já existe!');
    }else {
      const dataCreated = await cidadesRepository.create(data);
      await cidadesRepository.save(dataCreated);
      return dataCreated.id as number;
    }
  }catch (err) {
    console.log(err);
    return Error('Erro ao cadastrar o registro!');
  }
};