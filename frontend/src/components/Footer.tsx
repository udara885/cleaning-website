import { Link } from "react-router"

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src="/src/assets/clean.webp"
          alt="cleaning"
          className="w-full lg:h-73.5 lg:rounded-[1.875rem] lg:object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-4xl bg-black/60">
          <h2 className="font-inter mb-3 w-[70%] text-center text-2xl font-semibold text-white lg:mb-8 lg:text-5xl">
            Schedule Your Free Estimate Now
          </h2>
          <Link
            to="/quote"
            className="font-poppins w-39.75 rounded-full bg-[#046BD2] px-8 py-2.5 text-center font-semibold text-white uppercase lg:text-sm"
          >
            Estimate
          </Link>
        </div>
      </div>
      <div className="-mx-5 -mt-18 flex flex-col items-center bg-[#046BD2] lg:-mx-20 lg:flex-row lg:justify-between lg:px-20">
        <div className="flex flex-col items-center lg:-mt-10 lg:w-95 lg:items-start">
          <Link to="/" className="mt-24 lg:-mx-8">
            <img src="/src/assets/logo.webp" alt="logo" className="w-45.25" />
          </Link>
          <p className="px-6 text-center text-xs text-white capitalize lg:px-0 lg:text-left">
            Experience the Wisdom Clean difference—enjoy a spotless space that
            brings peace of mind. Let us handle the cleaning, so you can focus
            on what matters.
          </p>
        </div>
        <div className="mt-8 grid w-full grid-cols-3 gap-x-14 gap-y-2 px-14 lg:mt-0 lg:w-auto lg:gap-x-10 lg:pt-10">
          {["home", "services", "contact us", "about us", "projects"].map(
            (item, index) => (
              <Link
                to={`/${item.split(" ")[0] === "home" ? "" : item.split(" ")[0]}`}
                className="text-xs font-medium whitespace-nowrap text-white uppercase"
                key={index}
              >
                {item}
              </Link>
            ),
          )}
        </div>
        <div className="mt-4 mb-6 flex flex-col gap-4 lg:mt-24">
          <div className="flex flex-col items-center lg:items-end">
            <h2 className="font-medium text-white uppercase">
              Contact Details
            </h2>
            <span className="text-sm font-medium text-white">
              Phone: +61 422624456
            </span>
            <span className="text-sm font-medium text-white">
              email: @1234jsjka
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <h2 className="font-medium text-white uppercase">Wisdom Clean</h2>
            <span className="text-sm font-medium whitespace-nowrap text-white">
              Melbourne | Wagga Wagga
            </span>
            <span className="text-sm font-medium text-white">Newcastle</span>
          </div>
        </div>
      </div>
      <div className="-mx-5 flex flex-col items-center bg-[#075BAE] pt-1 pb-[0.625rem] lg:-mx-20 lg:flex-row lg:justify-between lg:px-20 lg:pt-1.75">
        <div className="flex flex-col items-center lg:flex-row lg:gap-1.25">
          <span className="mb-1 text-xs font-semibold text-white lg:mb-0">
            Follow Us :
          </span>
          <div className="flex gap-0.5">
            {[
              "https://img.icons8.com/?size=100&id=16466&format=png&color=000000",
              "https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=000000",
              "https://img.icons8.com/?size=100&id=118466&format=png&color=000000",
              "https://img.icons8.com/?size=100&id=98960&format=png&color=000000",
              "https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=000000",
            ].map((img, index) => (
              <img
                key={index}
                className="h-7 cursor-pointer rounded-full bg-white p-0.5"
                src={img}
              />
            ))}
          </div>
        </div>
        <span className="mt-4 text-[0.6875rem] font-medium text-white lg:mt-0">
          All copyrights reserved by WISDOM CLEAN Limited - © 2025
        </span>
      </div>
    </div>
  )
}
export default Footer
