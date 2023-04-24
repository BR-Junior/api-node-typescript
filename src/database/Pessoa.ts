import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { IPessoaModelDTO } from '../modules/pessoa/DTO/IPessoaDTO';
import { Cidade } from './Cidades';




@Entity('pessoas')
export class Pessoa implements IPessoaModelDTO{
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({ type: 'text' })
    nomeCompleto: string;

  // chave estrangeira
  @ManyToOne(() => Cidade, cidade => cidade.id,
    {cascade: true, onDelete: 'RESTRICT', nullable:true})
  @JoinColumn({name: 'cidade_id'})
    cidade: Cidade;

 @Column({ type: 'text', unique:true })
   email: string;
}