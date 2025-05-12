import mongoose,{Schema,Document} from "mongoose";


export interface MealI extends Document{
    title:string;
    slug:string;
    image:string;
    summary:string;
    instructions:string;
    creatorName:string;
    creatorEmail:string;
    createdAt?:Date;
    updatedAt?:Date;

}

const MealSchema:Schema<MealI> =new Schema( {
  
    title:{
        type:String,
        required:[true,"Title is required"],
        trim:true,
        unique:true
    },
    slug:{
        type:String,
        requied:true,
        unique:true,    
        trim:true,
    },
    instructions:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true
    },
    image:{
        type:String,

    },
    creatorName:{
        type:String,
        required:true
    },
    creatorEmail:{
        type:String,
        required:true
    },


},{timestamps:true}
)

export const Meal = (mongoose.models.Meal as mongoose.Model<MealI>) || mongoose.model<MealI>("Meal", MealSchema);