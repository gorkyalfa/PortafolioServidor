import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
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

    @Get('/:asignaturaID/contenido')
    async getContenidoByAsignatura(@Res() res: any, @Param('asignaturaID') asignaturaID: any) {
        const contenido = await this.service.find({asignaturaId: asignaturaID});
        if(!contenido) {
            this.service.throwNotFoundException('Contenido no encontrado');
        }
        return res.status(HttpStatus.OK).json(
            contenido
        );
    }
}
