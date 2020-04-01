import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TipoMaterial } from "./tipoMaterial.entity";

@Entity('materiales')
export class Material {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 200,
    })
    nombre: string;

    @Column({
        length: 200,
    })
    descripcion: string;

    @ManyToOne(
        type => TipoMaterial,
        tipoMaterial => tipoMaterial.materiales
    )
    tipoMaterial: TipoMaterial;

}
