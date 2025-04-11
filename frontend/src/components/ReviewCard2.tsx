import { IoMdStar } from "react-icons/io"

const ReviewCard2 = () => {
  return (
    <div className="font-manrope mt-9 mb-12 px-4 pt-4 pb-1">
      <div className="flex gap-4">
        <img
          src="reviewcardimg.png"
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[#191D23]">Samantha Payne</span>
          <span className="text-sm/4 text-[#64748B]">Traveller</span>
          <div className="mt-1 flex gap-1">
            {[...Array(5)].map((_, index) => (
              <IoMdStar key={index} className="size-5 text-yellow-300" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-semibold text-[#525252]">
          We booked a 'Premium Cleaning Package' with WISDOM CLEAN, and they
          delivered exceptional service.
        </p>
        <span className="text-xs text-[#64748B]">23 Nov 2021</span>
      </div>
    </div>
  )
}
export default ReviewCard2
