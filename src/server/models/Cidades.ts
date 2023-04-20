import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {ICidadesDTO} from '../controllers/cidadesController/ICidadesDTO';
import { Pessoa } from './Pessoa';



@Entity('cidades')
export class Cidade implements ICidadesDTO{
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({ type: 'text' })
    name: string;

@OneToMany(() => Pessoa, pessoa => pessoa.cidade)
  pessoas: Pessoa[];
}
