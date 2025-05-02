import mongoose from "mongoose"

const quoteSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      trim: true,
    },
    contactPerson: {
      type: String,
      required: [true, "Contact person is required."],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
    },
    serviceAddress: {
      type: String,
      required: [true, "Service address is required."],
      trim: true,
    },
    serviceType: {
      type: [String],
      required: [true, "Service type is required"],
      trim: true,
      enum: [
        "Residential Cleaning",
        "Commercial Cleaning",
        "Deep Cleaning",
        "Move-In/Move-Out Cleaning",
        "Post-Construction Cleaning",
        "Carpet Cleaning",
        "Window Cleaning",
      ],
    },
    frequency: {
      type: String,
      required: [true, "Frequency is required."],
      trim: true,
      enum: ["One-Time", "Weekly", "Bi-Weekly", "Monthly"],
    },
    propertyType: {
      type: String,
      required: [true, "Property type is required."],
      trim: true,
      enum: ["House", "Apartment/Condo", "Office", "Retail Store", "Warehouse"],
    },
    squareFootage: {
      type: String,
      required: [true, "Square footage is required."],
      trim: true,
    },
    bedrooms: {
      type: Number,
      trim: true,
    },
    bathrooms: {
      type: Number,
      trim: true,
    },
    additionalAreas: {
      type: String,
      trim: true,
    },
    specialRequests: {
      type: String,
      trim: true,
    },
    startDate: {
      type: String,
      required: [true, "Start date is required."],
      trim: true,
    },
    preferredTime: {
      type: String,
      required: [true, "Preferred time is required."],
      trim: true,
    },
  },
  { timestamps: true }
)

const Quote = mongoose.model("Quote", quoteSchema)

export default Quote
