import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("periodos-academicos")
export class PeriodoAcademico {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}