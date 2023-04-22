import { ICidadesRequestDTO } from '../DTO/ICidadesDTO';
import { cidadesRepository } from '../../models/repositories/cidadeRepository';



export const cidadeUseCaseCreate = async (cidades: Omit<ICidadesRequestDTO, 'id'>): Promise<number | string > => {

  try {
    const newCidade = await cidadesRepository.create(cidades);

    await cidadesRepository.save(newCidade);

    return newCidade.id as number;

  }catch (err) {

    console.log(err);

    return Error('Erro ao cadastrar o registro!').message ;
  }

};