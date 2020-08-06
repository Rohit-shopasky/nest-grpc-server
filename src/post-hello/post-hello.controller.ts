import { Controller,Get,Post,Req,Logger } from '@nestjs/common';
import { PostHelloService } from './post-hello.service'
import { Request } from 'express';
import {MessagePattern} from '@nestjs/microservices';

@Controller('post-hello')
export class PostHelloController {

    private logger = new Logger('PostHelloController');
    constructor(private readonly postHelloService: PostHelloService) {}

  //@Get('test')
  @MessagePattern('test')
  // postHello(@Req() req: Request): object {
     
  //   return this.postHelloService.postHello(req.query);
  // }
  async postHello(data:string){
    this.logger.log("Got string=>",data);
    return this.postHelloService.postHello(data);
  }
}
