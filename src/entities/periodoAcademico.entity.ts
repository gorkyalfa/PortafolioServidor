import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('periodos-academicos')
export class PeriodoAcademico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
