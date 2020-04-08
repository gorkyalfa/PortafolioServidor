import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('modalidades')
export class Modalidad {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column()
  nombre: string;
}
