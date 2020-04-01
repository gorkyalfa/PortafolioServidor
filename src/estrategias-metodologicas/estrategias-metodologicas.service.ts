import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstrategiasMetodologicasService extends TypeOrmCrudService<EstrategiaMetodologica> {
    constructor(@InjectRepository(EstrategiaMetodologica) repo: any) {
        super(repo)
    }

}
