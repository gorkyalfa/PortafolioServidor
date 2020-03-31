import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Semana } from 'src/entities/semana.entity';

@Injectable()
export class SemanasService extends TypeOrmCrudService<Semana>{
    constructor(@InjectRepository(Semana) repo: any) {
        super(repo);
    }
}
