import {pessoasRepository} from '../../../database/repositories/pessoaRepository';
import {cidadesRepository} from '../../../database/repositories/cidadeRepository';




export const pessoaUseCaseCreate = async (req:any): Promise<number | string > => {

  const { nomeCompleto, email, cidade } = req;
  try {

    if (!await cidadesRepository.findOneBy({id: Number(cidade)})) {
      return Error('Cidade não existe').message;
    }

    const newPessoa = await pessoasRepository.create({
      nomeCompleto,
      email,
      cidade

    });

    await pessoasRepository.save(newPessoa);

    return newPessoa.id as number;

  }catch (err) {

    console.log(err);

    return Error('Erro ao cadastrar o registro!').message;
  }

};