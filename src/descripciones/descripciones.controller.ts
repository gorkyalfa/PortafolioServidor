import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Descripcion } from 'src/entities/descripcion.entity';
import { DescripcionesService } from './descripciones.service';

@Crud({
	model: {
		type: Descripcion
	}
})
@Controller('descripciones')
export class DescripcionesController {
	constructor(private service: DescripcionesService){}

	@Get('/:id/silabo')
	async readSilabo(@Param('id') id: number, @Res() res: any): Promise<Descripcion> {
	  const silabo = await this.service.findSilabo(id);
	  return res.status(HttpStatus.OK).json(silabo);
	}	
	
}