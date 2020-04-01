import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Finalidad } from 'src/entities/finalidad.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FinalidadesService extends TypeOrmCrudService<Finalidad> {
    constructor(@InjectRepository(Finalidad) repo: any) {
        super(repo)
    }

    async getFinalidadWithEstrategia(): Promise<Finalidad[]> {
        const finalidades = await this.find({relations: ["estrategiaMetodologica"]});
        
        return finalidades;
    }

}
