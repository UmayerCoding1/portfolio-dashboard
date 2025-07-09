import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined");
}


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export  async function connectToDatabase () {
    if (cached.conn) {
        return
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URL).then((mongoose) => mongoose.connection)
    }

    try {
        cached.promise = await cached.promise
    } catch (error) {
        cached.promise = null;
        throw error
    }

    return cached.conn;
}