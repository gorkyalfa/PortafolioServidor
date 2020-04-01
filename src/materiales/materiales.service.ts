import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Material } from 'src/entities/material.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaterialesService extends TypeOrmCrudService<Material> {
    constructor(@InjectRepository(Material) repo: any) {
        super(repo)
    }

    async getMaterialesWithTipo(): Promise<Material[]> {
        const materiales = await this.find({ relations: ["tipoMaterial"] })
        return materiales;
    }

}
