// import {ICidadesDTO} from '../../controllers/cidadesController/ICidadesDTO';

import { ICidadeDTO } from '../../cidade/DTO/ICidadesDTO';
import {QueryDeepPartialEntity} from 'typeorm/query-builder/QueryPartialEntity';
import {Cidade} from '../../../database';

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
export interface IPessoaUpdateDTO {
  nomeCompleto: string
  email: string
  cidade: (() => string) | QueryDeepPartialEntity<Cidade> | undefined
}
export interface IPessoaFindDTO {
  id?: number | null
  nomeCompleto: string
  email: string
  cidade: {}
}

export interface IPessoaQueryDTO {
  page?: number | null
  limit?: number | null
}