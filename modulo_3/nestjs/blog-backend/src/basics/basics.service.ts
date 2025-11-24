import { Injectable, BadRequestException, Query } from '@nestjs/common';
import { get } from 'http';

@Injectable()
export class BasicsService {
    myfirstGet(): object {
        return {
            service: 'Blog Backend Api',
            function: 'basixs get',
            message: 'My new Get'
        };
    }

    mySecondGet(): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics get',
            message: 'My new Second Get'
        };
    }

    functionWithParameter(parametrer: string): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics get with parameter',
            parameter: parametrer
        };
    }

    functionWithPost(parameter: object): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics post with body',
            body: parameter
        };
    }

    functionWithPut(parameter: string,
        body: object
    ): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics put with id and body',
            message: 'Funcion con parametro y body',
            parameter: parameter,
            body: body
        };
    }

    functionWithPatch(parameter: string,
        body: object
    ): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics patch with id and body',
            message: 'Funcion con parametro y body',
            parameter: parameter,
            body: body
        };
    }
    delete(parameter: string): object {
        return {
            service: 'Blog Backend Api',
            function: 'basics delete with id',
            message: 'Funcion delete con parametro',
            parameter: parameter
        };
    }

    verificarEdad(data: { nombre: string; edad: number }) {
    if (data.edad >= 18) {
      return {
        nombre: data.nombre,
        edad: data.edad,
        puedeConducir: true,
        mensaje: ' Puede obtener licencia de conducir.'
      };
    } else {
      return {
        nombre: data.nombre,
        edad: data.edad,
        puedeConducir: false,
        mensaje: ' No puede conducir, es menor de edad.'
      };
    }
  }

  areaTriangulo(data: { base: number; altura: number }) {
    const area = (data.base * data.altura) / 2;
    return {
      base: data.base,
      altura: data.altura,
      area: area
    };
    }

    areaTriangulov2(parameter:any): object {
        const base = parameter.base;
        const altura = parameter.altura;
        const area = (base * altura) / 2;
        return {
            service: 'Blog Backend Api',
            function: 'calculo area triangulo v2',
            base: base,
            altura: altura,
            area: area
        };
    }

    comparaNumeros(data: { numero1: number; numero2: number; numero3: number }) {
        const uno = data.numero1;
        const dos = data.numero2;
        const tres = data.numero3;
        if (uno> dos && uno> tres){
            return {
                numeroMayor: uno
            };
        }else if (dos> uno && dos> tres){
            return {
                numeroMayor: dos
            };
        }else {
            return {
                numeroMayor: tres
            };
        }
    }

    promedio(n1: number, n2: number, n3: number):object {
    const promedio = (n1 + n2 + n3) / 3;

    return {
        service: 'Blog Backend Api',
        function: 'calculo promedio',
        promedio: promedio,
    };

    }
    verificarCredito (edad: number, ingresos: number, historialCrediticio: string){let aprobarCredito: "no";
    if (edad >= 18 && ingresos >= 1000 && historialCrediticio === 'bueno') {
        return {
            aprobarCredito: "si",
        }
  }
}
}
