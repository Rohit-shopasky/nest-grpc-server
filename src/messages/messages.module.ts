import { Module } from '@nestjs/common';
import {MessageResolver} from './message.resolver';
import {MongooseModule} from '@nestjs/mongoose' 
import {MsgSchema} from '../dbmodels/chat.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'Msg',schema:MsgSchema}])],
    providers:[MessageResolver],
    exports:[MessageResolver],
})
export class MessagesModule {}
