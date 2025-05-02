import { Router } from "express"
import { getQuotes, requestQuote } from "../controller/quote.controller"

const quoteRouter = Router()

quoteRouter.get("/", getQuotes)
quoteRouter.post("/", requestQuote)

export default quoteRouter
