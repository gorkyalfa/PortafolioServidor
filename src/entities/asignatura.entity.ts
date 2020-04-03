import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Malla } from './malla.entity';
import { Silabo } from './silabo.entity';
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
  
  @Column()
  totalHoras: number;

  @ManyToOne(
    type => Malla,
    malla => malla.asignaturas,
  )
  malla: Malla;

  prerrequisito: Silabo;
  @OneToOne(type => Contenido)
  contenido: Contenido;

}
