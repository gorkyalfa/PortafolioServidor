import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Asignatura } from '../entities/asignatura.entity';

@Injectable()
export class AsignaturasService extends TypeOrmCrudService<Asignatura> {
  constructor(@InjectRepository(Asignatura) repo: any) {
    super(repo);
  }
}
