import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("modalidades")
export class Modalidad {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}