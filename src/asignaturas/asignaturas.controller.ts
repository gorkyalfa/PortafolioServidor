import { Controller, Get, Param } from '@nestjs/common';
import { Asignatura } from '../entities/asignatura.entity';
import { AsignaturasService } from './asignaturas.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Asignatura } })
@Controller('asignaturas')
export class AsignaturasController {

  constructor(private service: AsignaturasService) {}

@Get('/objetivoDetalle')
readObjetiboDetalle(@Param('id') id:number)  {
  return this.service.findObjetiboDetalle(id)
}
}
