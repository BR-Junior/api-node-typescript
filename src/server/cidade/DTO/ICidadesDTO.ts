import {Pessoa} from '../../models';

export interface ICidadeModelDTO {
 id?: number | null
 name: string
 pessoas: Pessoa[]
}
export interface ICidadeDTO {
 id?: number | null
 name: string
}
export interface ICidadesRequestDTO {
 id?: string
  name: string
}
export interface ICidadeQueryDTO {
  page?: number | null
 limit?: number | null
 }