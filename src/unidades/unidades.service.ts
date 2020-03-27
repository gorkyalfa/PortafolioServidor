import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Unidad } from 'src/entities/unidad.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UnidadesService extends TypeOrmCrudService<Unidad>{
    constructor(@InjectRepository(Unidad) repo: any) {
        super(repo);
    }
}
