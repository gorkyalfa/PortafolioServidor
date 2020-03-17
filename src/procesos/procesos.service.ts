import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Proceso } from 'src/entities/proceso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProcesosService extends TypeOrmCrudService<Proceso> {
    constructor(@InjectRepository(Proceso) repo: any) {
        super(repo);
    }
}
