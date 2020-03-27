import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TreeParent,
  OneToMany,
} from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';

@Entity('procesos')
export class Proceso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  @TreeParent()
  idProceso: number;

  @Column({
    length: 250,
  })
  nombre: string;

  @OneToMany(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.proceso,
  )
  resultadosAprendizaje: ResultadoAprendizaje[];

  @Column({
    generated: 'increment',
  })
  orden: number;
}
