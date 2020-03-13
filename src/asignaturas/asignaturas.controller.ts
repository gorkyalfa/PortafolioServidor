import { Controller } from '@nestjs/common';
import { Asignatura } from '../entities/asignatura.entity';
import { AsignaturasService } from './asignaturas.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Asignatura } })
@Controller('asignaturas')
export class AsignaturasController {
  constructor(private service: AsignaturasService) {}
}
