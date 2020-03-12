import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { TipoMaterial } from '../entities/tipoMaterial.entity'

@Injectable()
export class TipoMaterialesService extends TypeOrmCrudService<TipoMaterial>{
    //private readonly tipoMateriales: TipoMaterial[] = [];

    constructor (@InjectRepository(TipoMaterial) repo: any) {
		super(repo)
	}

    /*create(tipoMaterial: TipoMaterial) {
        // Todo: 
        this.tipoMateriales.push(tipoMaterial);
    }

    getAll(): TipoMaterial[] {
        return this.tipoMateriales;
    }*/


}



