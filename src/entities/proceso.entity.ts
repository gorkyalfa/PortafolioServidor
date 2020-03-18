import { Entity, Column, PrimaryGeneratedColumn, Tree, TreeParent, OneToMany, TreeChildren } from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';

@Entity('procesos')
@Tree("materialized-path")
export class Proceso {
  @PrimaryGeneratedColumn()
  id: number;

  @TreeParent()
  proceso: Proceso;

  @TreeChildren()
  procesos: Proceso[];

  @Column({
      length: 250
  })
  nombre: string;

  @OneToMany(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.proceso
  )
  resultadosAprendizaje: ResultadoAprendizaje[];

  @Column({
    default: 0
  })
  index: number;
}
