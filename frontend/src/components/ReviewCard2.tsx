import { IoMdStar } from "react-icons/io"

interface Review {
  firstName: string
  lastName: string
  rating: number
  comment: string
  createdAt: string
}

const ReviewCard2 = ({ review }: { review: Review }) => {
  return (
    <div className="font-manrope mt-9 mb-12 px-4 pt-4 pb-1">
      <div className="flex items-center gap-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#046BD2] font-bold text-white">
          {review.firstName.split("")[0] + review.lastName.split("")[0]}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[#191D23]">
            {review.firstName + " " + review.lastName}
          </span>
          <div className="mt-1 flex gap-1">
            {[...Array(review.rating)].map((_, index) => (
              <IoMdStar key={index} className="size-5 text-yellow-300" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-semibold text-[#525252]">{review.comment}</p>
        <span className="text-xs text-[#64748B]">
          {review.createdAt.split("T")[0]}
        </span>
      </div>
    </div>
  )
}
export default ReviewCard2
