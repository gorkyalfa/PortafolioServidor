import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asignatura } from './asignatura.entity';

@Entity("carreras")
export class Carrera {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => Asignatura, asignatura => asignatura.carrera)
    asignaturas: Asignatura[];

}