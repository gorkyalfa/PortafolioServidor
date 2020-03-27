import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modalidades')
export class Modalidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
