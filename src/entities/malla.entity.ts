import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Carrera } from './carrera.entity';
import { Asignatura } from './asignatura.entity';
import { MaxLength, IsString, IsNotEmpty } from 'class-validator';
import { Silabo } from './silabo.entity';

@Entity('mallas')
export class Malla {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
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
  
  @OneToMany(
    type => Silabo,
    silabo => silabo.malla,
  )
  silabos: Silabo[];
}
