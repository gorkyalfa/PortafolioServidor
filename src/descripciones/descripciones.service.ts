import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Descripcion } from 'src/entities/descripcion.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { getRepository } from 'typeorm';

@Injectable()
export class DescripcionesService extends TypeOrmCrudService<Descripcion>{
    constructor(@InjectRepository(Descripcion) repo: any) {
        super(repo);
    }

    async findSilabo(id: number): Promise<Descripcion> {
        const silabo = await getRepository(Descripcion)
       .createQueryBuilder("descripcion")
       .innerJoinAndSelect("descripcion.silabo", "silabo")
       .where("descripcion.id = :id", { id })
       .getOne();
       return silabo;    
    }
}