import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL not found")
    }
    const conn = await mongoose.connect(process.env.DB_URL)
    console.log(`Database connected: ${conn.connection.host}`)
  } catch (error: any) {
    console.error(`Error: ${error.messsage}`)
    process.exit(1)
  }
}
