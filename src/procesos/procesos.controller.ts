import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
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

    manager = getManager();

    constructor(private service: ProcesosService) {}

    @Get('/hijo/:hijoID')
    async getChildrens(@Res() res: any, @Param('hijoID') hijoID: any){
        const hijo = await this.service.findOne(hijoID);
        if (!hijo) {
            return this.service.throwNotFoundException('Hijo no encontrado')
        }
        const ancestros = await this.manager.getTreeRepository(Proceso).findAncestorsTree(hijo);
        return res.status(HttpStatus.OK).json(
            ancestros.proceso
        );
    }

    @Get('/padres')
    async getParents(@Res() res: any){
        const padres = await this.manager.getTreeRepository(Proceso).findTrees();
        return res.status(HttpStatus.OK).json(
            padres
        );
    }
}
