import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { SemanasService } from './semanas.service';
import { Crud } from '@nestjsx/crud';
import { Semana } from 'src/entities/semana.entity';

@Crud({
    model: {
        type: Semana
    }
})
@Controller('semanas')
export class SemanasController {
    constructor(private service: SemanasService) {}
    
    @Get('/:unidadID/unidad')
    async getSemanasByUnidad(@Res() res: any, @Param('unidadID') unidadID: any) {
        const semanas = await this.service.find({unidad: unidadID});
        if(!semanas) {
            this.service.throwNotFoundException('Semanas no encontradas');
        }
        return res.status(HttpStatus.OK).json(
            semanas
        );
    }
}
