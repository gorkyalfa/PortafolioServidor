import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asignatura } from './asignatura.entity';

@Entity("periodos-academicos")
export class PeriodoAcademico {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => Asignatura, asignatura => asignatura.periodoAcademico)
  asignaturas: Asignatura[];

}