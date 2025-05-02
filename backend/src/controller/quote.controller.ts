import { NextFunction, Request, Response } from "express"
import Quote from "../model/quote.model"

// interface customError extends Error {
//   statusCode?: Number
// }

export const getQuotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const quotes = await Quote.find()
    res.status(200).json({
      success: true,
      data: quotes,
    })
  } catch (error) {
    next(error)
  }
}

export const requestQuote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const quote = await Quote.create(req.body)
    res.status(201).json({
      success: true,
      data: quote,
    })
  } catch (error) {
    next(error)
  }
}
