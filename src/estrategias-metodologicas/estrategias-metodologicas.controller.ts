import { Controller } from '@nestjs/common';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { Crud } from '@nestjsx/crud';
import { EstrategiasMetodologicasService } from './estrategias-metodologicas.service';

@Crud({
	model: {
		type: EstrategiaMetodologica
	}
})
@Controller('estrategias-metodologicas')
export class EstrategiasMetodologicasController {
	constructor(private service: EstrategiasMetodologicasService){}
	
}
