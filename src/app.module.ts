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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'prueba',
      entities: [Asignatura, Carrera, Instituto, Malla, TipoMaterial],
      synchronize: true,
      logging: true,
    }),
    AsignaturasModule,
    CarrerasModule,
    InstitutosModule,
    MallasModule,
    TipoMaterialesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
