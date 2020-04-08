import {
  Controller,
  Get,
  Res,
  Param,
  HttpStatus,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Proceso } from 'src/entities/proceso.entity';
import { ProcesosService } from './procesos.service';
import { getManager } from 'typeorm';

@Crud({
  model: {
    type: Proceso,
  },
})
@Controller('procesos')
export class ProcesosController {
  constructor(private service: ProcesosService) {}

  // Metodo para obtener numero de ancestros de un proceso.
  @Get('/:procesoId/ancestro')
  getAncestros(@Param('procesoId', ParseIntPipe) procesoId: number): Promise<number> {
    return this.service.getAncentros(procesoId);
  }

  // Metodo para obtener Arboles de forma anidada 
  // desde el mayor mostrando los procesos que contiene
  // como propiedad.
  @Get('/arboles')
  getTrees(): Promise<Proceso[]> {
    return this.service.getTrees();
  }

  @Delete('/remover/:procesoId')
  removeProcesoAndClosure(
    @Param('procesoId', ParseIntPipe) procesoId: number,
  ): Promise<any[]> {
    return this.service.removeProcesoAndClosure(procesoId);
  }
}
