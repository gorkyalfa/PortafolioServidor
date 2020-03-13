import { Controller } from '@nestjs/common';
import { Instituto } from "../entities/instituto.entity";
import { InstitutosService } from './institutos.service';
import { Crud } from "@nestjsx/crud";

@Crud({
	model: {
		type: Instituto
	}
})
@Controller('institutos')
export class InstitutosController {
    constructor(private service: InstitutosService){}
}
