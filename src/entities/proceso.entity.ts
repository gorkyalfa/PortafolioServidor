import { Entity, Column, PrimaryGeneratedColumn,
         Tree, TreeParent, OneToMany, TreeChildren, Generated} from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';

@Entity('procesos')
@Tree("closure-table")
export class Proceso {

  @PrimaryGeneratedColumn()
  id: number;

  @TreeParent()
  procesoAncestro: Proceso;

  @TreeChildren()
  procesosDescendientes: Proceso[];

  @Column({
      length: 250
  })
  nombre: string;

  @OneToMany(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.proceso
  )
  resultadosAprendizaje: ResultadoAprendizaje[];

}
