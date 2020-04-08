import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Proceso } from 'src/entities/proceso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';

@Injectable()
export class ProcesosService extends TypeOrmCrudService<Proceso> {
    // Propiedad para acceder a metodos de consultas y acciones con los arboles.
    private manager = getManager();

    constructor(@InjectRepository(Proceso) repo: any) {
        super(repo);
    }

    async getAncentros(procesoId: number): Promise<number> {
        const proceso = await this.findOne(procesoId);
        
        if (!proceso) {
            this.throwNotFoundException(`Proceso con ${procesoId} no encontrado.`);
        }
        const ancestros = await this.manager
          .getTreeRepository(Proceso)
          .countAncestors(proceso);
        // Retorna 1 si es raiz.
        return ancestros;
    }

    async getTrees(): Promise<Proceso[]> {
        const arboles = await this.manager.getTreeRepository(Proceso).findTrees();
        return arboles;
    }

    // Metodo para eliminar procesos mediante consultas debido a que aun no es soportado.
    async removeProcesoAndClosure(procesoId: number): Promise<any[]> {
        const action1 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos_closure')
            .where(`id_descendant = ${procesoId}`)
            .execute();
        const action2 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos_closure')
            .where(`id_ancestor = ${procesoId}`)
            .andWhere(`id_descendant = ${procesoId}`)
            .execute();
        const action3 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos')
            .where(`id = ${procesoId}`)
            .execute();
        return [action1.affected, action2.affected, action3.affected];
      
    }

}
