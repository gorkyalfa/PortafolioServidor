import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ResultadoAprendizaje } from 'src/entities/resultadoAprendizaje.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResultadosAprendizajeService extends TypeOrmCrudService<ResultadoAprendizaje>{
    constructor(@InjectRepository(ResultadoAprendizaje) repo: any) {
        super(repo)
    }
}
