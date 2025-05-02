import { NextFunction, Request, Response } from "express"
import Review from "../model/review.model"

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.find()
    res.status(200).json({
      success: true,
      data: reviews,
    })
  } catch (error) {
    next(error)
  }
}

export const addReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const review = await Review.create(req.body)
    res.status(201).json({
      success: true,
      data: review,
    })
  } catch (error) {
    next(error)
  }
}
