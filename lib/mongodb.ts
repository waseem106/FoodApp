import mongoose from "mongoose";




let isConnected=false
export async function dbconnect(){

    try {
        if(isConnected) return;
        await mongoose.connect(process.env.DB_URI || '') 
        console.log("Connected to DB!");
        isConnected=true
    } catch (error) {
        console.log("Database Connection failed!")
        process.exit(1)
    }
  
}