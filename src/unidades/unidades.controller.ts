import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Unidad } from 'src/entities/unidad.entity';
import { UnidadesService } from './unidades.service';

@Crud({
    model: {
        type: Unidad
    }
})
@Controller('unidades')
export class UnidadesController {
    constructor(private service: UnidadesService) {}

    @Get('/:contenidoID/contenido')
    async getUnidadesByContenido(@Res() res: any, @Param('contenidoID') contenidoID: any) {
        const unidades = await this.service.find({contenido: contenidoID});
        if(!unidades) {
            this.service.throwNotFoundException('Unidades no encontradas');
        }
        return res.status(HttpStatus.OK).json(
            unidades
        );
    }

}
