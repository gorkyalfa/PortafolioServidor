import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('periodos-academicos')
export class PeriodoAcademico {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(150)
  @IsNotEmpty()
  @IsString()
  @Column()
  nombre: string;
}
