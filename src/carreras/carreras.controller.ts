import { Controller } from '@nestjs/common';
import { Carrera } from '../entities/carrera.entity';
import { CarrerasService } from './carreras.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Carrera } })
@Controller('carreras')
export class CarrerasController {
  constructor(private service: CarrerasService) {}
}
