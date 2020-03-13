import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Malla } from './malla.entity';

@Entity('asignaturas')
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(type => Malla, malla => malla.asignaturas)
  malla: Malla;
}
