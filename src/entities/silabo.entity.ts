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
}
