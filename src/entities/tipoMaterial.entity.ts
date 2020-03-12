import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("tipo_materiales")
export class TipoMaterial {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}