import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("institutos")
export class Instituto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}