import { Module } from '@nestjs/common';
import { DescripcionesController } from './descripciones.controller';
import { DescripcionesService } from './descripciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Descripcion } from 'src/entities/descripcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Descripcion])],
  controllers: [DescripcionesController],
  providers: [DescripcionesService]
})
export class DescripcionesModule {}