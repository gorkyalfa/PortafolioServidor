import { Module } from '@nestjs/common';
import { ProcesosController } from './procesos.controller';
import { ProcesosService } from './procesos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proceso } from 'src/entities/proceso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proceso])],
  controllers: [ProcesosController],
  providers: [ProcesosService],
})
export class ProcesosModule {}
