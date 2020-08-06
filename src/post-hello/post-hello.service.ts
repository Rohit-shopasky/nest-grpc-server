import { Injectable,Req } from '@nestjs/common';
import { Request } from 'express';



@Injectable()
export class PostHelloService {

    postHello(data): object {
        return {greet:"Hello " + data};
      }
}
