import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { EstrategiaMetodologica } from "./estrategiaMetodologica.entity";

@Entity('finalidades')
export class Finalidad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    nombre: string;

    @OneToOne(type => EstrategiaMetodologica)
    @JoinColumn()
    estrategiaMetodologica: EstrategiaMetodologica;
        
    @Column({ nullable: true })
    estrategiaMetodologicaId: number;
}
