import mongoose from "mongoose";

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connect(url);
mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'))
mongoose.connection.on("disconnected", () => console.log('DB disconnected'))
mongoose.connection.on('error', (error: Error) => console.log(error))

export default mongoose