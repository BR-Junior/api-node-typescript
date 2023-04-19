import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ICidadesDTO} from '../controllers/cidadesController/ICidadesDTO';



@Entity('cidades')
export class Cidade implements ICidadesDTO{
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({ type: 'text' })
    name: string;
}