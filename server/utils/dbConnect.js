import mongoose from "mongoose";
import config from "config"

async function dbConnect(){
    try {
        let db_URL = config.get("DB_URL");
        await mongoose.connect(db_URL)
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log(error);
    }
}