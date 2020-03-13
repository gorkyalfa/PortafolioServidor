import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Carrera } from '../entities/carrera.entity';

@Entity('institutos')
export class Instituto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(
    type => Carrera,
    carrera => carrera.instituto,
  )
  carreras: Carrera[];
}
