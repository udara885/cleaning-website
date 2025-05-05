import { IoMdStar } from "react-icons/io"
import Star from "../components/Star"
import ReviewCard2 from "../components/ReviewCard2"
import Footer from "../components/Footer"
import { SubmitHandler, useForm } from "react-hook-form"
import { useReviewStore } from "../store/review"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"

interface FormData {
  firstName: string
  lastName: string
  comment: string
  rating: number
  createdAt: string
}

const ReviewPage = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const { addReview, getReviews, reviews } = useReviewStore()

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      await getReviews()
      setLoading(false)
    }
    fetchReviews()
  }, [getReviews])

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await toast.promise(addReview(data), {
      loading: "Submitting your review.",
      success: (res) => {
        reset()
        return res.message
      },
      error: "Something went wrong!",
    })
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-[#001E3D]">
      <div className="relative h-182 w-full lg:h-115.75">
        <div className="fixed inset-0 z-0 bg-[#046BD2] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="font-poppins relative z-10 flex flex-col items-center justify-between gap-1 px-5 pt-70.75 text-white lg:flex-row lg:justify-between lg:gap-11 lg:px-20 lg:pt-31.75">
          {[
            "top-42 left-32 lg:top-40 lg:left-106.75",
            "top-56 right-25 lg:top-26.75 lg:left-191.75",
            "top-121 left-9 lg:top-31.75 lg:left-15.25",
            "top-112 right-10 lg:top-57.75",
            "hidden lg:block lg:top-99.75 lg:left-36",
            "hidden lg:block lg:top-92.5 lg:left-134",
          ].map((className, index) => (
            <div className={`absolute ${className}`} key={index}>
              <Star />
            </div>
          ))}
          <div className="flex flex-col items-center gap-1 lg:-mt-10 lg:items-start">
            <h1 className="text-4xl/16 font-semibold whitespace-nowrap uppercase lg:text-6xl">
              Reviews
            </h1>
            <p className="text-center text-sm font-medium capitalize lg:text-left lg:text-base">
              Our clients trust us to deliver reliable, innovative cleaning
              services that ensure cleanliness, hygiene, and a fresh environment
              across industries worldwide.
            </p>
          </div>
          <img
            src="/src/assets/people.webp"
            alt="people"
            className="mt-20.25 lg:mt-0 lg:w-139.25"
          />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-7 text-black lg:px-20 lg:pt-8">
        <form className="lg:px-60.75" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center text-xl font-semibold uppercase lg:text-[2.375rem]/9.5">
            Review Spotter
          </h2>
          <div className="mt-4.5 flex flex-col gap-2">
            <div className="lg:flex lg:justify-between lg:gap-5">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="rounded-md border border-[#C6C6C6] p-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="lastName" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="rounded-md border border-[#C6C6C6] p-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="comment" className="text-sm">
                Add Review
              </label>
              <textarea
                id="comment"
                rows={3}
                className="rounded-md border border-[#C6C6C6] px-5 py-4 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                placeholder="Leave a Review here ....."
                {...register("comment", { required: "Comment is required" })}
              />
              {errors.comment && (
                <p className="text-sm text-red-500">{errors.comment.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="rating"
                className="text-sm font-semibold uppercase"
              >
                Rating
              </label>
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="rating"
                    value={5 - index}
                    className="relative h-4.5 w-4.5 appearance-none rounded-sm border border-[#C6C6C6] checked:border-[#046BD2] checked:bg-[#046BD2] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-xs checked:after:text-white checked:after:content-['✓']"
                    {...register("rating", { required: "Rating is required" })}
                  />
                  <div className="flex gap-1">
                    {[...Array(5 - index)].map((_, index) => (
                      <IoMdStar
                        key={index}
                        className="size-5 text-yellow-300"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#828282]">
                    ({5 - index} Star)
                  </span>
                </div>
              ))}
              {errors.rating && (
                <p className="text-sm text-red-500">{errors.rating.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mx-auto mt-9 w-66.25 cursor-pointer rounded-4xl bg-[#046BD2] p-3 font-semibold text-white lg:mt-8 lg:w-70.75"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-23.5 lg:mt-18.75">
          {loading ? (
            <p className="text-center font-semibold">Getting Reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index}>
                <hr className="-mx-5 text-[#505050]" />
                <ReviewCard2 review={review} />
                {index === reviews.length - 1 && (
                  <hr className="-mx-5 text-[#505050]" />
                )}
              </div>
            ))
          ) : (
            <p className="text-center font-semibold">No Reviews Found.😟</p>
          )}
        </div>
        <div className="mt-12 lg:mt-30">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ReviewPage
