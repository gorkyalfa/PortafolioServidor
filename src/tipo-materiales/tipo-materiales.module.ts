import { Module } from '@nestjs/common';
import { TipoMaterialesController } from './tipo-materiales.controller';
import { TipoMaterialesService } from './tipo-materiales.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoMaterial } from '../entities/tipoMaterial.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ TipoMaterial ]) ],
    controllers: [TipoMaterialesController],
    providers: [TipoMaterialesService] })
    
export class TipoMaterialesModule { }
