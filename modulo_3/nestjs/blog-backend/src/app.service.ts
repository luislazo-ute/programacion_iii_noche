import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNewEndpoint(): string {
    return 'This is the new endpoint response!';
  }

  getHealth(): any {
    return {
      service: 'Blog Backend Api',
      version: '0.0.1'
    };
  }
}
