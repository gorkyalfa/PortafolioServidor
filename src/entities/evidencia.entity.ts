import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';

@Entity('evidencias')
export class Evidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 250
  })
  nombre: string;

  @OneToMany(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.evidencia
  )
  resultadosAprendizaje: ResultadoAprendizaje[];

}
