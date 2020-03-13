import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Carrera } from './carrera.entity';
import { Asignatura } from './asignatura.entity';

@Entity('mallas')
export class Malla {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  nombre: string;

  @ManyToOne(
    type => Carrera,
    carrera => carrera.mallas,
  )
  carrera: Carrera;

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.malla,
  )
  asignaturas: Asignatura[];
}
