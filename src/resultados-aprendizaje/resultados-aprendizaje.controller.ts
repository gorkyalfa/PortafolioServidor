import { Controller, Get } from '@nestjs/common';
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
    @Get('/evidencia')
    async getResultadosJoinEvidencias(){
        return await this.service.find({ relations: ["evidencia"] });
    }

}
