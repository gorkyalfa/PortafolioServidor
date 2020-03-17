import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Asignatura } from './asignatura.entity';

@Entity("modalidades")
export class Modalidad {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(type => Asignatura, asignatura => asignatura.modalidades)
    asignatura: Asignatura;

}