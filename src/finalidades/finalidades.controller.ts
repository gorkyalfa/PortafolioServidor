import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Finalidad } from 'src/entities/finalidad.entity';
import { Crud } from '@nestjsx/crud';
import { FinalidadesService } from './finalidades.service';

@Crud({
	model: {
		type: Finalidad
	}
})
@Controller('finalidades')
export class FinalidadesController {
	constructor(private service: FinalidadesService){}

    @Get('estrategia')
	async getFinalidadWithEstrategia(@Res() res: any) {
		const finalidades = await this.service.getFinalidadWithEstrategia();
		return res.status(HttpStatus.OK).json(finalidades);
	}
	
}
