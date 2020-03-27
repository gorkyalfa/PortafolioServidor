import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ResultadoAprendizaje } from 'src/entities/resultadoAprendizaje.entity';
import { ResultadosAprendizajeService } from './resultados-aprendizaje.service';

@Crud({
    model: {
        type: ResultadoAprendizaje
    }
})
@Controller('resultados-aprendizaje')
export class ResultadosAprendizajeController {
    constructor(private service: ResultadosAprendizajeService) {}

    // Metodo para obtener resultados con su respectiva Evidencia.
    @Get('/:id/evidencia')
    async getResultadosJoinEvidencias(@Param('id') id: any){
        return await this.service.find({where: [{id: id}], relations: ["evidencia"] });
    }

    // Metodo para obtener resultados de un subproceso
    @Get('/:procesoID/proceso')
    async getResultadosJoinProcesos(@Param('procesoID') procesoID: any){
        return await this.service.find({proceso: procesoID});
    }
 
}
