import { Controller, Get, Post,Logger } from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from '@nestjs/microservices';


@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController','getHello')
  async getHello(UserName) {
     console.log("username",UserName.data);
     let result = await this.appService.getHello(UserName.data);
    console.log("result",result);
    return {data:this.appService.getHello(UserName.data)};
  }
}

