import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Unidad } from './unidad.entity';
import { Asignatura } from './asignatura.entity';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('contenidos')
export class Contenido {

  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({length: 100})
  nombre: string;

  @OneToMany(
    type => Unidad,
    unidad => unidad.contenido
  )
  unidades: Unidad[];

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

  @IsNotEmpty()
  @Column({ nullable: true })
  asignaturaId: number;

}
