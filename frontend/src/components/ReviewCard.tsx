import { Star } from "lucide-react"
import { Review } from "../types/types"

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="font-manrope w-full flex-shrink-0 rounded px-4 pt-6 pb-3 shadow-sm">
      <h3 className="font-semibold">{`${review.firstName} ${review.lastName}`}</h3>
      <div className="mt-2 flex gap-1">
        {[...Array(review.rating)].map((_, index) => (
          <Star size={17} key={index} fill="yellow" stroke="yellow" />
        ))}
      </div>
      <p className="mt-5 mb-4 text-[#525252]">{review.comment}</p>
      <span className="text-xs text-[#64748B]">
        {review.createdAt.split("T")[0]}
      </span>
    </div>
  )
}
export default ReviewCard
