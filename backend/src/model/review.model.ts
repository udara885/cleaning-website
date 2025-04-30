import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 1,
    },
  },
  { timestamps: true }
)

const Review = mongoose.model("Review", reviewSchema)

export default Review
