import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Material } from 'src/entities/material.entity';
import { Crud } from '@nestjsx/crud';
import { MaterialesService } from './materiales.service';

@Crud({
	model: {
		type: Material
	}
})
@Controller('materiales')
export class MaterialesController {
	constructor(private service: MaterialesService){}
	
	@Get('tipos')
	async getMaterialesWithTipo(@Res() res: any) {
		const materiales = await this.service.getMaterialesWithTipo();
		return res.status(HttpStatus.OK).json(materiales);
	}
	
}
