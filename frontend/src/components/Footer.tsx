const Footer = () => {
  return (
    <>
      <div className="pt-[3.125rem]">
        <div className="relative">
          <img src="clean.png" alt="cleaning" />
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-4xl bg-black/60">
            <h2 className="font-inter mb-3 w-[70%] text-center text-2xl font-semibold text-white">
              Schedule Your Free Estimate Now
            </h2>
            <button className="font-poppins w-[9.9375rem] rounded-full bg-[#046BD2] px-8 py-2.5 font-semibold text-white uppercase">
              Estimate
            </button>
          </div>
        </div>
      </div>
      <div className="-mx-5 -mt-18 flex flex-col items-center bg-[#046BD2]">
        <img src="logo.png" alt="logo" className="mt-24 w-[11.3125rem]" />
        <p className="px-6 text-center text-xs text-white capitalize">
          Experience the Wisdom Clean difference—enjoy a spotless space that
          brings peace of mind. Let us handle the cleaning, so you can focus on
          what matters.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-2 px-14">
          {["home", "services", "contact us", "about us", "projects"].map(
            (item, index) => (
              <span
                className="text-xs font-medium whitespace-nowrap text-white uppercase"
                key={index}
              >
                {item}
              </span>
            ),
          )}
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h2 className="font-medium text-white uppercase">Contact Details</h2>
          <span className="text-sm font-medium text-white">
            Phone: +61 422624456
          </span>
          <span className="text-sm font-medium text-white">
            email: @1234jsjka
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h2 className="font-medium text-white uppercase">Wisdom Clean</h2>
          <span className="text-sm font-medium text-white">
            Melbourne | Wagga Wagga
          </span>
          <span className="text-sm font-medium text-white">Newcastle</span>
        </div>
        <div className="mt-6 flex w-full flex-col items-center bg-[#075BAE] pt-1 pb-[0.625rem]">
          <span className="mb-1 text-xs font-semibold text-white">
            Follow Us :
          </span>
          <div className="flex gap-0.5">
            {[
              "whatsapp.png",
              "instagram.png",
              "facebook.png",
              "linkedin.png",
              "x.png",
            ].map((img, index) => (
              <img key={index} className="h-7" src={img} />
            ))}
          </div>
          <span className="mt-4 text-[0.6875rem] font-medium text-white">
            All copyrights reserved by WISDOM CLEAN Limited - © 2025
          </span>
        </div>
      </div>
    </>
  )
}
export default Footer
