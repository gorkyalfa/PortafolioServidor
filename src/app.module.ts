import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InstitutosModule } from './institutos/institutos.module';
import { TipoMaterialesModule } from './tipo-materiales/tipo-materiales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [
        Instituto,
        TipoMaterial],
      synchronize: false,
      logging: true,
    }),
    TipoMaterialesModule,
    InstitutosModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
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
