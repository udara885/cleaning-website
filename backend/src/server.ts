import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./database/db"
import errorMiddleware from "./middlewares/error.middleware"
import reviewRouter from "./routes/review.routes"
import quoteRouter from "./routes/quote.routes"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/reviews", reviewRouter)
app.use("/api/v1/quotes", quoteRouter)

app.use(errorMiddleware)

app.use("/", (req, res) => {
  res.send("API is active")
})

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectDB()
})
