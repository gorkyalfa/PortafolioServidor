import { Controller } from '@nestjs/common';
import { EvidenciasService } from './evidencias.service';
import { Crud } from '@nestjsx/crud';
import { Evidencia } from 'src/entities/evidencia.entity';

@Crud({
    model: {
        type: Evidencia
    }
})
@Controller('evidencias')
export class EvidenciasController {
    constructor(private service: EvidenciasService) {}
}
