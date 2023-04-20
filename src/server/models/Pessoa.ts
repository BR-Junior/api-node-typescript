import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { IPessoaDTO } from '../DTO/IPessoaDTO/IPessoaDTO';
import { Cidade } from './Cidades';




@Entity('pessoas')
export class Pessoa implements IPessoaDTO{
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({ type: 'text' })
    nomeCompleto: string;

  // chave estrangeira
  @ManyToOne(() => Cidade, cidade => cidade.pessoas,
    {cascade: true, onDelete: 'RESTRICT', nullable:true})
  @JoinColumn({name: 'cidade_id'})
    cidade: Cidade;

 @Column({ type: 'text', unique:true })
   email: string;
}