import * as mongoose from 'mongoose';

export const MsgSchema = new mongoose.Schema({
    description:{type: String},
    createdAt:{type:Date,default:new Date()}
})


export interface Msg{
    _id:string,
    description:string,
    createdAt:string
}