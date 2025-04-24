import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res) => {
  res.send("API is active")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
