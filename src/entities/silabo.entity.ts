import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Docente } from './docente.entity';
import { Requisito } from './requisito.entity';
import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Proceso } from './proceso.entity';
import { PeriodoAcademico } from './periodoAcademico.entity';
import { Modalidad } from './modalidad.entity';
import { Malla } from './malla.entity';
import { Contenido } from './contenido.entity';
import { Carrera } from './carrera.entity';

@Entity('silabos')
export class Silabo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

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
    carrera => carrera.silabos,
  )
  carrera: Carrera;

  @ManyToOne(
    type => PeriodoAcademico,
    periodoAcademico => periodoAcademico.silabos,
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
    modalidad => modalidad.silabos,
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
    malla => malla.silabos,
  )
  malla: Malla;

  @OneToOne(type => Contenido)
  @JoinColumn()
  contenido: Contenido;  

  @ManyToOne(
    type => Docente,
    docente => docente.silabos,
  )
  docente: Docente;

  // TODO: Aquí copiar la información de correquisitos y prerequisitos
  // de la asignatura solo las columnas que coinciden osea el nombre y el código
  // estamos duplicando por si a alguien se le ocurre reorganizar la malla,
  // el silabo queda como cuando se creo.

  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  correquisitos: Requisito[];

  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  prerrequisitos: Requisito[];

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  descripcionAsignatura: string;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  objetivoAsignatura: string;

  @OneToMany(
    type => Proceso,
    proceso => proceso.silabo,
  )
  procesos: Proceso[];
}
