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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jjcastillo',
      password: '12345',
      database: 'prueba',
      entities: [Asignatura, Carrera, Evidencia, Instituto,
                 Malla, Modalidad, PeriodoAcademico, Proceso, 
                 ResultadoAprendizaje, TipoMaterial, Semana,
                 Contenido, Unidad],
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
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
