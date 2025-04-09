import { Star } from "lucide-react"

const ReviewCard = () => {
  return (
    <div className="font-manrope w-full flex-shrink-0 rounded px-4 pt-6 pb-3 shadow-sm">
      <h3 className="font-semibold">Samantha Payne</h3>
      <div className="mt-2 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star size={17} key={index} fill="yellow" stroke="yellow" />
        ))}
      </div>
      <p className="mt-5 mb-4 text-[#525252]">
        Your company has been great at keeping my space clean and fresh. They
        always ensure everything is spotless and well-maintained.
      </p>
      <span className="text-xs text-[#64748B]">23 Nov 2021</span>
    </div>
  )
}
export default ReviewCard
