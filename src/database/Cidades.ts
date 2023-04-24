import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { ICidadeModelDTO } from '../modules/cidade/DTO/ICidadesDTO';
import { Pessoa } from './Pessoa';



@Entity('cidades')
export class Cidade implements ICidadeModelDTO{
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({ type: 'text' })
    name: string;

@OneToMany(() => Pessoa, pessoa => pessoa.cidade)
  pessoas: Pessoa[];
}
