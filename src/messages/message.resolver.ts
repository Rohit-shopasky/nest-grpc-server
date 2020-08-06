import {Query, Resolver, Mutation,Args} from '@nestjs/graphql';
import {Injectable} from '@nestjs/common'
import {Msg} from '../dbmodels/chat.model'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

@Resolver()
export class MessageResolver{

    constructor(
        @InjectModel('Msg') private readonly MsgModel:Model<Msg>,
        ){}
    

    @Query()
    async messages(){
       let result = await this.MsgModel.find();
       console.log("result",result);
       return result;
    }

    @Mutation()
   async createMessage(@Args('description') description:string){

       const newMsg = new this.MsgModel({
           description:description
       })

       let result = await newMsg.save();
       console.log("result=>",result);

      return result;
    }

}
