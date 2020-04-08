import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contenido } from 'src/entities/contenido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContenidosService extends TypeOrmCrudService<Contenido>{
    constructor(@InjectRepository(Contenido) repo: any) {
        super(repo);
    }

    async getContenidoByAsignatura(asignaturaId: number): Promise<Contenido[]> {
        const contenido = await this.find({asignaturaId: asignaturaId});
        
        if(!contenido) {
            this.throwNotFoundException(`Contenido de id ${asignaturaId} no encontrado.`);
        }
        return contenido;
    }

}
