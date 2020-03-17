import { Entity, Column, PrimaryGeneratedColumn, TreeParent, ManyToOne } from 'typeorm';
import { Evidencia } from './evidencia.entity';
import { Proceso } from './proceso.entity';

@Entity('resultados_aprendizaje')
export class ResultadoAprendizaje {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Proceso,
    proceso => proceso.resultadosAprendizaje
  )
  proceso: Proceso;

  @Column({
      length: 250
  })
  resultado: string;

  @ManyToOne(
      type => Evidencia,
      evidencia => evidencia.resultadosAprendizaje
  )
  evidencia: Evidencia;

  @Column({
    generated: "increment"
  })
  orden: number;
}
