import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TipoMaterial } from "../entities/tipoMaterial.entity";
import { TipoMaterialesService } from './tipo-materiales.service';
import { Crud } from "@nestjsx/crud";

@Crud({
	model: {
		type: TipoMaterial
	
	
	}
})
@Controller('tipo-materiales')
export class TipoMaterialesController {
    constructor(private service: TipoMaterialesService){}

    /*
    @Post()
    async create(@Body() crearTipoMaterialDto: TipoMaterialDto): Promise<number> {        
        this.tipoMaterialesService.create(crearTipoMaterialDto);
        // TODO: verificar si el id se actualiza
        return crearTipoMaterialDto.id;
    }

    @Get()
    async getAll(): Promise<TipoMaterialDto[]> {
        // No requiere paginacion porque los datos que vamos a recuperar son una decena
        return this.tipoMaterialesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): TipoMaterialDto {
        // TODO
        return null;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() actualizarTipoMaterialDto: TipoMaterialDto): number {
        // TODO: retornar el ID del Dto actualizado
        return id;
    }

    @Delete(':id')
    remove(@Param('id') id: number): number {
        return id;
    }
    */
}

