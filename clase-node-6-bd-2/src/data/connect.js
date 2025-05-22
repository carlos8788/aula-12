import mongoose from "mongoose";
import config from "../config.js";

const connectToDB = async () => {
   const result = await mongoose.connect(config.URI)
   // console.log(result)
   console.log('DATABASE OK')
}

export default connectToDB