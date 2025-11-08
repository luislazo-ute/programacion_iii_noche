import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-endpoint')
  getNewEndpoint(): string {
    return this.appService.getNewEndpoint();
  }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
