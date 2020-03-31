import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Unidad } from './unidad.entity';

@Entity('semanas')
export class Semana {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        type => Unidad,
        unidad => unidad.semanas
    )
    unidad: Unidad;

    @Column()
    semanaNumero: number;

    @Column({
        length: 250
    })
    contenido: string;

    @Column({
        length: 250
    })
    actividadDocencia: string;

    @Column()
    horasActividadDocencia: number;

    @Column({
        length: 250
    })
    trabajoPractico: string;

    @Column()
    horasTrabajoPractico: number;

    @Column({
        length: 250
    })
    trabajoAutonomo: string;

    @Column()
    horasTrabajoAutonomo: number;

    @Column({
        length: 250
    })
    observacion: string;

}
