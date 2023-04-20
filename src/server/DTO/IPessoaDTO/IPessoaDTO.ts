import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

export interface IPessoaDTO {
  id?: number | null
  nomeCompleto: string
  email: string
  cidade: ICidadesDTO
}