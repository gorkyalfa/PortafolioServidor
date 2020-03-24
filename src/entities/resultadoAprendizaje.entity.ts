import { Entity, Column, PrimaryGeneratedColumn, Generated, ManyToOne } from 'typeorm';
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
  nombre: string;


  @Column({ nullable: true })
  evidenciaId: number;

  @ManyToOne(
      type => Evidencia,
      evidencia => evidencia.resultadosAprendizaje
  )
  evidencia: Evidencia;

}
