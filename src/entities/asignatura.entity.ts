import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Malla } from './malla.entity';
import { Contenido } from 'src/entities/contenido.entity';
import { IsNotEmpty, MaxLength, IsString, IsNumber } from 'class-validator';
import { PeriodoAcademico } from './periodoAcademico.entity';
import { Modalidad } from './modalidad.entity';
import { Carrera } from './carrera.entity';

@Entity('asignaturas')
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @MaxLength(20)
  @IsNotEmpty()
  @Column({
    length: 20,
  })
  codigo: string;

  @ManyToOne(
    type => Carrera,
    carrera => carrera.asignaturas,
  )
  carrera: Carrera;

  @ManyToOne(
    type => PeriodoAcademico,
    periodoAcademico => periodoAcademico.asignaturas,
  )
  periodoAcademico: PeriodoAcademico;

  @MaxLength(20)
  @IsNotEmpty()
  @Column({
    length: 20,
  })
  periodoLectivo: string;

  @ManyToOne(
    type => Modalidad,
    modalidad => modalidad.asignaturas,
  )
  modalidad: Modalidad;

  @MaxLength(40)
  @IsNotEmpty()
  @Column({
    length: 40,
  })
  unidadOrganizacionCurricular: string;

  @MaxLength(40)
  @IsNotEmpty()
  @Column({
    length: 40,
  })
  campoFormacion: string;

  @IsNumber()
  @Column()
  totalHorasDocencia: number;

  @IsNumber()
  @Column()
  totalHorasAutonomas: number;

  @IsNumber()
  @Column()
  totalHorasPracticasAprendizaje: number;

  @IsNumber()
  @Column()
  numeroTotalHoras: number;


  @ManyToOne(
    type => Malla,
    malla => malla.asignaturas,
  )
  malla: Malla;

  @OneToOne(type => Contenido)
  @JoinColumn()
  contenido: Contenido;  

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.correquisito,
  )
  correquisitos: Asignatura[];
  
  @ManyToOne(
    type => Asignatura,
    asignatura => asignatura.correquisitos,
  )
  correquisito: Asignatura;

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.prerequisito,
  )
  prerrequisitos: Asignatura[];

  @ManyToOne(
    type => Asignatura,
    asignatura => asignatura.prerrequisitos,
  )
  prerequisito: Asignatura;
}
