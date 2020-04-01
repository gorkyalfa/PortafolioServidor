import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Finalidad } from './finalidad.entity';

@Entity('estrategias_metodologicas')
export class EstrategiaMetodologica {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 200})
    nombre: string;

    @Column({nullable: true, length: 350})
    descripcion: string;

    @OneToOne(type => Finalidad)
    finalidad: Finalidad;

}
