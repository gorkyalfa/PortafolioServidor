import {
  Controller,
  Get,
  Res,
  Param,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Proceso } from 'src/entities/proceso.entity';
import { ProcesosService } from './procesos.service';
import { getManager } from 'typeorm';

@Crud({
  model: {
    type: Proceso,
  },
})
@Controller('procesos')
export class ProcesosController {
  // Propiedad para acceder a metodos de consultas y acciones con los arboles.
  private manager = getManager();

  constructor(private service: ProcesosService) {}

  // Metodo para obtener numero de ancestros de un proceso.
  @Get('/:procesoID/ancestro')
  async getAncestros(@Res() res: any, @Param('procesoID') procesoID: number) {
    const proceso = await this.service.findOne(procesoID);
    if (!proceso) {
      return this.service.throwNotFoundException('Proceso no encontrado');
    }
    const ancestros = await this.manager
      .getTreeRepository(Proceso)
      .countAncestors(proceso);
    return res.status(HttpStatus.OK).json(
      // retorna 1 en caso de ser Proceso ancestro, mas d 1 con un solo ancestro de ser SubProceso.
      ancestros,
    );
  }

  // Metodo para obtener Arboles de forma anidada desde el mayor mostrando los procesos que contiene
  // como propiedad.
  @Get('/arboles')
  async getTrees(@Res() res: any) {
    const arboles = await this.manager.getTreeRepository(Proceso).findTrees();
    return res.status(HttpStatus.OK).json(arboles);
  }

  // Metodo para eliminar procesos mediante consultas debido a que aun no es soportado.
  @Delete('/remover/:procesoID')
  async removeProcesoAndClosure(
    @Res() res: any,
    @Param('procesoID') procesoID: number,
  ) {
    try {
      const action1 = this.manager
        .createQueryBuilder()
        .delete()
        .from('procesos_closure')
        .where(`id_descendant = ${procesoID}`);
      const action2 = this.manager
        .createQueryBuilder()
        .delete()
        .from('procesos_closure')
        .where(`id_ancestor = ${procesoID}`)
        .andWhere(`id_descendant = ${procesoID}`);
      const action3 = this.manager
        .createQueryBuilder()
        .delete()
        .from('procesos')
        .where(`id = ${procesoID}`);
      await action1.execute();
      await action2.execute();
      await action3.execute();
      return res.status(HttpStatus.OK).json({
        msg: 'Eliminado correctamente',
        id: procesoID,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }
}
