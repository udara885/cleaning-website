import { Router } from "express"
import { addReview, getReviews } from "../controller/review.controller"

const reviewRouter = Router()

reviewRouter.get("/", getReviews)
reviewRouter.post("/", addReview)

export default reviewRouter
