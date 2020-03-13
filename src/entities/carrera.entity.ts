import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Instituto } from './instituto.entity';
import { Malla } from './malla.entity';

@Entity('carreras')
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(type => Instituto, instituto => instituto.carreras)
  instituto: Instituto;

  @OneToMany(
    type => Malla,
    malla => malla.carrera,
  )
  mallas: Malla[];
}
