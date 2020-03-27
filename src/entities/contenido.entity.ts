import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Unidad } from './unidad.entity';
import { Asignatura } from './asignatura.entity';

@Entity('contenidos')
export class Contenido {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(
    type => Unidad,
    unidad => unidad.contenido
  )
  unidades: Unidad[];

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

  @Column({ nullable: true })
  asignaturaId: number;

}
