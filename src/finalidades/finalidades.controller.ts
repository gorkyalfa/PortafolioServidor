import { Controller, Get, Delete, Body } from '@nestjs/common';
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
	getFinalidadWithEstrategia(): Promise<Finalidad[]> {
		return this.service.getFinalidadWithEstrategia();
	}

	@Delete('/removeMany')
	deleteManyFinalidades(@Body() finalidades: Finalidad[]): Promise<any[]> {
		return this.service.deleteManyFinalidades(finalidades);
	}

}
