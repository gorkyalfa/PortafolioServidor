import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Contenido } from 'src/entities/contenido.entity';
import { ContenidosService } from './contenidos.service';

@Crud({
    model: {
        type: Contenido
    }
})
@Controller('contenidos')
export class ContenidosController {
    constructor(private service: ContenidosService) {}

    @Get('/:asignaturaId/contenido')
    getContenidoByAsignatura(
        @Param('asignaturaId', ParseIntPipe) asignaturaId: number
    ) {
        return this.service.getContenidoByAsignatura(asignaturaId);
    }
}
