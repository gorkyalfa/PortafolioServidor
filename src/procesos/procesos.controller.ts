import { Controller, Get, Res, Param, NotFoundException, HttpStatus } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Proceso } from 'src/entities/proceso.entity';
import { ProcesosService } from './procesos.service';
import { getManager } from 'typeorm';

@Crud({
    model: {
        type: Proceso
    }
})
@Controller('procesos')
export class ProcesosController {
    constructor(private service: ProcesosService) {}

    @Get('/hijos/:padreID')
    async getChildrens(@Res() res: any, @Param('padreID') padreID: any){
        const padre = await this.service.findOne(padreID);
        if(!padre) throw new NotFoundException('Padre no existe');
        const hijos = await this.service.find({proceso: padreID});
        return res.status(HttpStatus.OK).json(
            hijos
        );
    }

    @Get('/padres')
    async getParents(@Res() res: any){
        const manager = getManager();
        const padres = await manager.getTreeRepository(Proceso).findTrees();
        return res.status(HttpStatus.OK).json(
            padres
        );
    }
}
