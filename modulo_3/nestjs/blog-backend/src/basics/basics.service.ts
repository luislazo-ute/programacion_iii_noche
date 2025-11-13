import { Injectable, BadRequestException } from '@nestjs/common';

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

   
}