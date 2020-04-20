import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Asignatura } from '../entities/asignatura.entity';
import {getRepository} from "typeorm";

@Injectable()
export class AsignaturasService extends TypeOrmCrudService<Asignatura> {

constructor(@InjectRepository(Asignatura) repo: any) {
    super(repo);
 }  

async findObjetiboDetalle (id:number) {
  const asignatura = await getRepository(Asignatura)
    .createQueryBuilder("asignatura")
    .where("asignatura.id = :id", { id})
    .getOne();
}

async findCorrequisitos(id: number): Promise<Asignatura> {
  const correquisitos = await getRepository(Asignatura)
 .createQueryBuilder("asignatura")
 .innerJoinAndSelect("asignatura.correquisitos", "correquisitos")
 .where("asignatura.id = :id", { id })
 .getOne();
 return correquisitos;
}
}
