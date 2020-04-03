import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Descripcion } from './descripcion.entity';

@Entity('silabos')
export class Silabo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    nombre: string;

    @ManyToMany(type => Asignatura)
    @JoinTable()
    correquisitos: Asignatura[];

    @ManyToMany(type => Asignatura)
    @JoinTable()
    prerrequisitos: Asignatura[];

    @OneToOne(type => Asignatura)
    @JoinColumn()
    asignatura: Asignatura;

    @OneToOne(type => Descripcion, descripcion => descripcion.silabo)
    @JoinColumn()
    descripcion: Descripcion;
}
