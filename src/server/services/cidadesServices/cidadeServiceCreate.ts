import { ICidadesRequestDTO } from '../../DTO/ICidadesDTO/ICidadesDTO';
import { cidadesRepository } from '../../repositories/cidadesRepository/cidadesRepository';


export const cidadeServiceCreate = async (cidades: Omit<ICidadesRequestDTO, 'id'>): Promise<number | string > => {

  try {

    const newCidade = await cidadesRepository.create(cidades);

    await cidadesRepository.save(newCidade);

    return newCidade.id as number;

  }catch (err) {

    console.log(err);

    return Error('Erro ao cadastrar o registro!').message ;
  }

};