import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contenido } from 'src/entities/contenido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContenidosService extends TypeOrmCrudService<Contenido>{
    constructor(@InjectRepository(Contenido) repo: any) {
        super(repo);
    }
}
