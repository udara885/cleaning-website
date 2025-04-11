import { IoMdStar } from "react-icons/io"
import Star from "../components/Star"
import ReviewCard2 from "../components/ReviewCard2"
import Footer from "../components/Footer"

const ReviewPage = () => {
  return (
    <div className="h-screen w-full text-[#001E3D]">
      <div className="relative h-[728px] w-full">
        <div className="fixed inset-0 z-0 bg-[#046BD2] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="font-poppins relative z-10 flex h-[728px] flex-col items-center justify-between gap-1 px-5 pt-[17.6875rem] text-white">
          {[
            "top-42 left-32",
            "top-56 right-25",
            "top-121 left-9",
            "top-112 right-10",
          ].map((className, index) => (
            <div className={`absolute ${className}`} key={index}>
              <Star />
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl leading-9 font-semibold uppercase">
              Reviews
            </h1>
            <p className="text-center text-sm font-medium capitalize">
              Our clients trust us to deliver reliable, innovative cleaning
              services that ensure cleanliness, hygiene, and a fresh environment
              across industries worldwide.
            </p>
          </div>
          <img src="people.png" alt="people" />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5">
        <form className="pt-7 text-black">
          <h2 className="text-center text-xl font-semibold uppercase">
            Review Spotter
          </h2>
          <div className="mt-4.5 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="fname" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="rounded-md border border-[#C6C6C6] p-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lname" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="rounded-md border border-[#C6C6C6] p-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="review" className="text-sm">
                Add Review
              </label>
              <textarea
                id="review"
                name="review"
                rows={3}
                className="rounded-md border border-[#C6C6C6] px-5 py-4 outline-none"
                placeholder="Leave a Review here ....."
              />
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
                    name="rating"
                    id="rating"
                    className="relative h-4.5 w-4.5 appearance-none rounded-sm border checked:bg-[#046BD2] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-xs checked:after:text-white checked:after:content-['✓']"
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
            </div>
            <button
              type="submit"
              className="mx-[4.6875rem] mt-7 rounded-4xl bg-[#046BD2] p-3 font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-23.5">
          {[...Array(2)].map((_, index) => (
            <div key={index}>
              <hr className="-mx-5 text-[#505050]" />
              <ReviewCard2 />
              {index === 1 && <hr className="-mx-5 text-[#505050]" />}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ReviewPage
