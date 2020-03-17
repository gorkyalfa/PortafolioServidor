import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Modalidad } from './modalidad.entity';
import { Carrera } from './carrera.entity';
import { PeriodoAcademico } from './periodoAcademico.entity';



@Entity("asignaturas")
export class Asignatura {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  descripcion: string;

  @Column()
  objetivo: string;

  @Column()
  totalHoras: number;

  @ManyToOne(type => Carrera, carrera => carrera.asignaturas)
    carrera: Carrera;

  @OneToMany(type => Modalidad, modalidad => modalidad.asignatura)
    modalidades: Modalidad[];

  @ManyToOne(type => PeriodoAcademico, periodoAcademico => periodoAcademico.asignaturas)
    periodoAcademico: PeriodoAcademico;   

}