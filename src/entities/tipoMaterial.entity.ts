import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Material } from './material.entity';

@Entity('tipo_materiales')
export class TipoMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
  })
  nombre: string;

  @OneToMany(
    type => Material,
    materiales => materiales.tipoMaterial
  )
  materiales: Material[];

}
