import { Controller, Get, Param, Post, Body, Put, Patch, Delete, Query} from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(private readonly basicsService: BasicsService) {}

    @Get()
    myfirstGet(): object {
        return this.basicsService.myfirstGet();
    }

    @Get('second')
    mySecondGet(): object {
        return this.basicsService.mySecondGet();
    }

    @Get(':myParameter')
    requestWithParameter(@Param('myParameter') myParameter: string) {
        return this.basicsService.functionWithParameter(myParameter);
    }

    @Post()
    create(@Body() bodyData:object) {
        return this.basicsService
            .functionWithPost(bodyData);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() updateBody: object) {
        return this.basicsService
            .functionWithPut(id, updateBody);
    }

    @Patch(':id')
    updatePatch(
        @Param('id') id: string, 
        @Body() updateBody: object) {
        return this.basicsService
            .functionWithPatch(id, updateBody);
    }

    @Delete(':id')
    delete(
        @Param('id') id: string) {
        return this.basicsService.delete(id);
    }

    @Post('licencia-conducir')
    verificarLicencia(@Body() bodyData: { nombre: string; edad: number }) {
        return this.basicsService.verificarEdad(bodyData);
  }

    @Post('area-triangulo')
    areaTriangulo(@Body() bodyData: { base: number; altura: number }) {
        return this.basicsService.areaTriangulo(bodyData);
    }


    @Post('area-triangulov2')
    areaTriangulov2(@Body() bodyData: object) {
        return this.basicsService.areaTriangulov2(bodyData);
    }

    @Post('comparar-numeros')
    comparaNumeros(@Body() bodyData: { numero1: number; numero2: number; numero3: number }) {
        return this.basicsService.comparaNumeros(bodyData);
    }

    @Get('calcular-promedio/:n1/:n2/:n3')
    promedio(
        @Param('n1') n1: number,
        @Param('n2') n2: number,
        @Param('n3') n3: number
        ) {return this.basicsService.promedio(+n1,+n2,+n3);}

@Get('verificar-credito')
verificarCredito(
    @Query('edad') edad: string,
    @Query('ingresos') ingresos: string,
    @Query('historialCrediticio') historialCrediticio: string,
) {
    return this.basicsService.verificarCredito(
        +edad,
        +ingresos,
        historialCrediticio,
    );
}
}
