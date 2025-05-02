import { SubmitHandler, useForm } from "react-hook-form"
import { useQuoteStore } from "../store/quote"
import toast from "react-hot-toast"

interface FormData {
  companyName: string
  contactPerson: string
  phoneNumber: string
  email: string
  serviceAddress: string
  serviceType: string[]
  frequency: string
  propertyType: string
  squareFootage: string
  bedrooms: string
  bathrooms: string
  additionalAreas: string
  specialRequests: string
  startDate: string
  preferredTime: string
}

const serviceTypes = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Move-In/Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
]

const frequencies = ["One-Time", "Weekly", "Bi-Weekly", "Monthly"]

const propertyTypes = [
  "House",
  "Apartment/Condo",
  "Office",
  "Retail Store",
  "Warehouse",
]

const QuoteFormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const { addQuote } = useQuoteStore()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await toast.promise(addQuote(data), {
      loading: "Submitting your quote.",
      success: (res) => {
        reset()
        return res.message
      },
      error: "Something went wrong!",
    })
  }

  const getTomorrow = (): string => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <div className="font-poppins min-h-screen overflow-auto bg-[#046BD2] px-3 pt-6 lg:px-0">
      <div className="mx-auto my-30 max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#046BD2]">
          Cleaning Quote Request
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#046BD2]">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="companyName"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("companyName")}
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="contactPerson"
                >
                  Contact Person:
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("contactPerson", {
                    required: "Contact person is required.",
                  })}
                />
                {errors.contactPerson && (
                  <p className="text-red-500">{errors.contactPerson.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("phoneNumber", {
                    required: "Phone number is required.",
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="serviceAddress"
                >
                  Service Address:
                </label>
                <input
                  type="text"
                  id="serviceAddress"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("serviceAddress", {
                    required: "Service address is required.",
                  })}
                />
                {errors.serviceAddress && (
                  <p className="text-red-500">
                    {errors.serviceAddress.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#046BD2]">
              Service Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="serviceType"
                >
                  Type of Cleaning Service Needed:
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {serviceTypes.map((type, index) => (
                    <label key={index} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={type}
                        className="h-4 w-4 rounded border-gray-300 text-[#046BD2] focus:ring-blue-500"
                        {...register("serviceType", {
                          required: "Service type is required.",
                        })}
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-red-500">{errors.serviceType.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="frequency"
                >
                  Frequency of Service:
                </label>
                <select
                  id="frequency"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("frequency", {
                    required: "Frequency is required.",
                  })}
                >
                  <option value="">Select frequency</option>
                  {frequencies.map((freq, index) => (
                    <option key={index} value={freq}>
                      {freq}
                    </option>
                  ))}
                </select>
                {errors.frequency && (
                  <p className="text-red-500">{errors.frequency.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#046BD2]">
              Property Details
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="propertyType"
                >
                  Property Type:
                </label>
                <select
                  id="propertyType"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("propertyType", {
                    required: "Property type is required.",
                  })}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p className="text-red-500">{errors.propertyType.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="squareFootage"
                >
                  Total Square Footage:
                </label>
                <input
                  type="number"
                  id="squareFootage"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("squareFootage", {
                    required: "Square footage is required.",
                  })}
                />
                {errors.squareFootage && (
                  <p className="text-red-500">{errors.squareFootage.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bedrooms"
                >
                  Number of Bedrooms:
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("bedrooms", {
                    min: {
                      value: 1,
                      message: "Number of bedrooms must be at least 1",
                    },
                  })}
                />
                {errors.bedrooms && (
                  <p className="text-red-500">{errors.bedrooms.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="bathrooms"
                >
                  Number of Bathrooms:
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("bathrooms", {
                    min: {
                      value: 1,
                      message: "Number of bathrooms must be at least 1",
                    },
                  })}
                />
                {errors.bathrooms && (
                  <p className="text-red-500">{errors.bathrooms.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="additionalAreas"
                >
                  Additional Areas to Clean:
                </label>
                <input
                  type="text"
                  id="additionalAreas"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("additionalAreas")}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <label
              className="mb-4 text-lg font-semibold text-[#046BD2]"
              htmlFor="specialRequests"
            >
              Special Requests
            </label>
            <div>
              <textarea
                id="specialRequests"
                placeholder="Any special instructions or notes..."
                className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("specialRequests")}
              />
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#046BD2]">
              Schedule
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="startDate"
                >
                  Preferred Start Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  min={getTomorrow()}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("startDate", {
                    required: "Start date is required.",
                  })}
                />
                {errors.startDate && (
                  <p className="text-red-500">{errors.startDate.message}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="preferredTime"
                >
                  Preferred Time:
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 caret-[#046BD2] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("preferredTime", {
                    required: "Preferred time is required.",
                  })}
                />
                {errors.preferredTime && (
                  <p className="text-red-500">{errors.preferredTime.message}</p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="focus:[#046BD2] w-full cursor-pointer rounded-md bg-[#046BD2] px-6 py-3 font-medium text-gray-50 transition-colors hover:bg-[#046BC1] focus:ring-2 focus:ring-offset-2 focus:outline-none md:w-auto"
          >
            Request Quote
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteFormPage
