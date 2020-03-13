import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutosController } from './Institutos.controller';
import { InstitutosService } from './institutos.service';
import { Instituto } from '../entities/instituto.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ Instituto ]) ],
    controllers: [InstitutosController],
    providers: [InstitutosService] })
    
export class InstitutosModule { }
