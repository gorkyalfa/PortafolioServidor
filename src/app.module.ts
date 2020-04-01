import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { CarrerasModule } from './carreras/carreras.module';
import { EvidenciasModule } from './evidencias/evidencias.module';
import { InstitutosModule } from './institutos/institutos.module';
import { MallasModule } from './mallas/mallas.module';
import { ProcesosModule } from './procesos/procesos.module';
import { ResultadosAprendizajeModule } from './resultados-aprendizaje/resultados-aprendizaje.module';
import { TipoMaterialesModule } from './tipo-materiales/tipo-materiales.module';
import { Asignatura } from './entities/asignatura.entity';
import { Carrera } from './entities/carrera.entity';
import { Evidencia } from './entities/evidencia.entity';
import { Instituto } from './entities/instituto.entity';
import { Malla } from './entities/malla.entity';
import { Modalidad } from './entities/modalidad.entity';
import { PeriodoAcademico } from './entities/periodoAcademico.entity';
import { Proceso } from './entities/proceso.entity';
import { ResultadoAprendizaje } from './entities/resultadoAprendizaje.entity';
import { TipoMaterial } from './entities/tipoMaterial.entity';
import { SemanasModule } from './semanas/semanas.module';
import { UnidadesModule } from './unidades/unidades.module';
import { ContenidosModule } from './contenidos/contenidos.module';
import { Semana } from './entities/semana.entity';
import { Unidad } from './entities/unidad.entity';
import { Contenido } from './entities/contenido.entity';
import { MaterialesModule } from './materiales/materiales.module';
import { Material } from 'src/entities/material.entity';
import { EstrategiasMetodologicasModule } from './estrategias-metodologicas/estrategias-metodologicas.module';
import { FinalidadesModule } from './finalidades/finalidades.module';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { Finalidad } from 'src/entities/finalidad.entity';
import { TipoMaterialPopulate1585669066128 } from 'src/migrations/1585669066128-TipoMaterialPopulate';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'prueba',
      entities: [Asignatura, Carrera, Evidencia, Instituto,
                 Malla, Modalidad, PeriodoAcademico, Proceso, 
                 ResultadoAprendizaje, TipoMaterial, Semana,
                 Contenido, Unidad, Material, EstrategiaMetodologica,
                 Finalidad],
      synchronize: true,
      logging: true
    }),
    AsignaturasModule,
    CarrerasModule,
    EvidenciasModule,
    InstitutosModule,
    MallasModule,
    ProcesosModule,
    ResultadosAprendizajeModule,
    TipoMaterialesModule,
    SemanasModule,
    UnidadesModule,
    ContenidosModule,
    MaterialesModule,
    EstrategiasMetodologicasModule,
    FinalidadesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
