import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common';
import {Transport,ClientProxyFactory,ClientOptions} from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main')
const microserviceOption={

    transport:Transport.GRPC,
    options:{
    package:'app',
    protoPath: join(__dirname,'../src/app.proto')
    }
  }




async function bootstrap() {
   const app = await NestFactory.createMicroservice(AppModule,microserviceOption);
   await app.listen(()=>{
     logger.log('Microservice is listening...');
   });
}
bootstrap();




// const logger = new Logger('Main')
// const microserviceOption:ClientOptions ={
//     transport:Transport.TCP,
//     options:{
//     host:'localhost',
//     port:3000,
//     }
//   }

// const client = ClientProxyFactory.create(microserviceOption);
// client.send<object,string>('greet',"Rohit kumar")
// .subscribe(result=>logger.log(result));

