import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { CarrerasModule } from './carreras/carreras.module';
import { InstitutosModule } from './institutos/institutos.module';
import { MallasModule } from './mallas/mallas.module';
import { TipoMaterialesModule } from './tipo-materiales/tipo-materiales.module';
import { Asignatura } from './entities/asignatura.entity';
import { Carrera } from './entities/carrera.entity';
import { Malla } from './entities/malla.entity';
import { Instituto } from './entities/instituto.entity';
import { TipoMaterial } from './entities/tipoMaterial.entity';
import { ProcesosModule } from './procesos/procesos.module';
import { Proceso } from './entities/proceso.entity';
import { ResultadosAprendizajeModule } from './resultados-aprendizaje/resultados-aprendizaje.module';
import { ResultadoAprendizaje } from './entities/resultadoAprendizaje.entity';
import { Evidencia } from './entities/evidencia.entity';
import { EvidenciasModule } from './evidencias/evidencias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jjcastillo',
      password: '12345',
      database: 'prueba',
      entities: [Asignatura, Carrera, Instituto, Malla, TipoMaterial, Proceso, ResultadoAprendizaje, Evidencia],
      synchronize: true,
      logging: true,
    }),
    AsignaturasModule,
    CarrerasModule,
    InstitutosModule,
    MallasModule,
    TipoMaterialesModule,
    ProcesosModule,
    ResultadosAprendizajeModule,
    EvidenciasModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
