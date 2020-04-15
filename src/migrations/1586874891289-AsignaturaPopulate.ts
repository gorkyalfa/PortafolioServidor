import {MigrationInterface, QueryRunner} from "typeorm";

export class AsignaturaPopulate1586874891289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        INSERT INTO "asignaturas"("totalHoras", codigo,nombre,"mallaId")
        values (0,'2DS1FT0502', 'INTRODUCCIÓN AL DESARROLLO DE SOFTWARE',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo,nombre,"mallaId")
        values (0,'1DS1FT0402', 'MATEMÁTICA DISCRETA',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo,nombre,"mallaId")
        values (0,'7DS1AI1102', 'PRÁCTICAS DE FORMACIÓN DUAL I',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS1AI0502', 'ANÁLISIS Y DISEÑO DE SISTEMAS',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS1AI0602', 'FUNDAMENTOS DE PROGRAMACIÓN',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS1FT0302', 'DESARROLLO DEL PENSAMIENTO',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS2AI0502', 'METODOLOGÍA DE DESARROLLO DE SOFTWARE',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS2AI0502', 'BASE DE DATOS',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'7DS2AI0902', 'PRÁCTICAS DE FORMACIÓN DUAL II',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS2FT0402', 'ALGEBRA Y TRIGONOMETR A',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS2CL0302', 'LENGUAJE Y COMUNICACIÓN',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS2AI0602', 'PROGRAMACIÓN ORIENTADA A OBJETOS',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS3FT0202', 'FUNDAMENTOS DE ADMINISTRACIÓN',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'7DS3AI0902', 'PRÁCTICAS DE FORMACIÓN DUAL III',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS3FT0402', 'BASE DE DATOS AVANZADA',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS3AI0502', 'PROGRAMACIÓN VISUAL',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS3FT0402', 'CÁLCULO DIFERENCIAL E INTEGRAL',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS3AI0502', 'DISEÑO DE INTERFAZ',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS4AI0502', 'PROGRAMACIÓN DE APLICACIONES WEB',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS4FT0402', 'ESTADÍSTICA DESCRIPTIVA',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS4FT0402', 'LEGISLACIÓN INFORMÁTICA',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS4AI0602', 'DESARROLLO DE APLICACIONES MÓVILES',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'6DS4IS0302', 'DIVERSIDAD Y CULTURA',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'7DS4AI0902', 'PRÁCTICAS DE FORMACIÓN DUAL IV',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'6DS5AI1102', 'PRÁCTICAS DE FORMACIÓN DUAL V',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS5AI0502', 'FUNDAMENTOS DE REDES Y CONECTIVIDAD',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS5FT0302', 'EMPRENDIMIENTO',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS5FT0502', 'CALIDAD DEL SOFTWARE',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS5IS0302', 'ÉTICA PROFESIONAL',2);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS5IAI502', 'TENDENCIAS ACTUALES DE PROGRAMACIÓN',2);
                

        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS3FT1001', 'CALCULO DIFERENCIAL',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS3FT4301', 'PROGRAMACIÓN CON ALGORITMOS COMPLEJOS',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS3FT0201', 'FUNDAMENTOS DE PROYECTOS',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS3FT1001', 'PROGRAMACIÓN III',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS4FT0401', 'MODELACIÓN E IMPLEMENTACIÓN BASE DE DATOS',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS4FT1001', 'ANÁLISIS ESTADISTICO',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'6DS4FT0301', 'COMUNICACIÓN EFECTIVA',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS4FT0901', 'BASES DE DATOS',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS4FT0301', 'LEGISLACIÓN INFORMÁTICA',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS5FT0201', 'FUNDAMENTOS DE PROYECTO DE TESIS',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS5FT4301', 'APLICACIÓN DE PROCESOS PARALELOS Y PROGRAMACIÓN EN REDES',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'7DS5CE0201', 'DESARROLLO PERSONAL',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS5FT0501', 'REDES',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS5FT0701', 'PROGRAMACIÓN IV',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS5FT0901', 'CALCULO INTEGRAL',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'1DS6CE0201', 'TEMAS ESPECIALES',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'2DS6CE0501', 'PROCESOS DE DESARROLLO DE SOFTWARE',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'4DS6CE0601', 'TENDENCIAS DE PROGRAMACIÓN ACTUAL',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'3DS6CE0901', 'FUNDAMENTOS DE SOFTWARE ENGINEERING',3);
        
        INSERT INTO "asignaturas"("totalHoras", codigo, nombre,"mallaId")
        values (0,'5DS6CE4301', 'PROYECTO DE TESIS',3);
        `);
    
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DELETE FROM "asignaturas" WHERE "mallaId" IN(2,3);
        `);
    }

}
