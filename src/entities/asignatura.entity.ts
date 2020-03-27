import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Malla } from './malla.entity';
import { Contenido } from 'src/entities/contenido.entity';

@Entity('asignaturas')
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  nombre: string;

  @Column({
    length: 20,
  })
  codigo: string;

  @Column({
    length: 1000,
  })
  descripcion: string;

  @Column({
    length: 1000,
  })
  objetivo: string;

  @Column()
  totalHoras: number;

  @ManyToOne(
    type => Malla,
    malla => malla.asignaturas,
  )
  malla: Malla;

  @OneToOne(type => Contenido)
  contenido: Contenido;

}
