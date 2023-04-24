// import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

import { ICidadeDTO } from '../../cidade/DTO/ICidadesDTO';

export interface IPessoaModelDTO {
  id?: number | null
  nomeCompleto: string
  email: string
  cidade: ICidadeDTO | number
}
export interface IPessoaDTO {
  id?: number | null
  nomeCompleto: string
  email: string
  cidade: number
}