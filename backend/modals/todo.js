import mongoose from "mongoose";
const todoSchema= mongoose.Schema(
    {
        title:String,
        isDone:Boolean

    },
    {
        collection:'my collection'
    }
);
export const Todo= mongoose.model('acp', todoSchema);