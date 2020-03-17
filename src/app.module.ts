import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoMaterialesModule } from './tipo-materiales/tipo-materiales.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoMaterial } from './entities/tipoMaterial.entity';
import { Asignatura } from './entities/asignatura.entity';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { Carrera } from './entities/carrera.entity';
import { Modalidad } from './entities/modalidad.entity';
import { PeriodoAcademico } from './entities/periodoAcademico.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "prueba",
    entities: [Asignatura, Carrera, Modalidad, PeriodoAcademico, TipoMaterial],
    synchronize: true,
    logging: true
  }),
  TipoMaterialesModule,
  AsignaturasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

/*
{
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "prueba",
    entities: [TipoMaterial],
    synchronize: false,
    logging: true
  }
*/
