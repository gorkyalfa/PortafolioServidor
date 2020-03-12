import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoMaterialesModule } from './tipo-materiales/tipo-materiales.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoMaterial } from './entities/tipoMaterial.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "prueba",
    entities: [TipoMaterial],
    synchronize: false,
    logging: true
  }),
  TipoMaterialesModule],
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
