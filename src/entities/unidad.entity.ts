import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Contenido } from './contenido.entity';
import { Semana } from './semana.entity';

@Entity('unidades')
export class Unidad {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Contenido,
    contenido => contenido.unidades
  )
  contenido: Contenido;

  @Column({
      length: 250
  })
  nombre: string;
  
  @OneToMany(
    type => Semana,
    semana => semana.unidad
  )
  semanas: Semana[];

  @Column({
      nullable: true
  })
  horasTotales: number;

}
