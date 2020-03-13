import { Controller } from '@nestjs/common';
import { Malla } from '../entities/malla.entity';
import { MallasService } from './mallas.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Malla } })
@Controller('mallas')
export class MallasController {
  constructor(private service: MallasService) {}
}
