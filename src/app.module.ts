import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostHelloController } from './post-hello/post-hello.controller';
import { PostHelloService } from './post-hello/post-hello.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    GraphQLModule.forRoot({
    typePaths:['./**/*.graphql'],
    resolverValidationOptions:{
      requireResolversForResolveType:false
    }
  }), MessagesModule,
  MongooseModule.forRoot('mongodb+srv://root:root@cluster0-hg20y.mongodb.net/test?retryWrites=true&w=majority')
],
  
  controllers: [AppController, PostHelloController],
  providers: [AppService, PostHelloService],
})
export class AppModule {}
