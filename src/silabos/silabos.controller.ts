import { Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import { Silabo } from '../entities/silabo.entity';
import { SilabosService } from './silabos.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Silabo } })
@Controller('silabos')
export class SilabosController {
  constructor(private service: SilabosService) { }

  @Get('/:id/correquisitos')
  async readCorrequisitos(@Param('id') id: number, @Res() res: any): Promise<Silabo> {
    const correquisitos = await this.service.findCorrequisitos(id);
    return res.status(HttpStatus.OK).json(correquisitos);
  }
}



