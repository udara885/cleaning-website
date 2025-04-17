import Star from "../components/Star"
import { FaPhoneAlt } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import { BsClockFill } from "react-icons/bs"
import Footer from "../components/Footer"

const ContactPage = () => {
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
              Contact Us
            </h1>
            <p className="text-center text-sm font-medium capitalize">
              Contact Wisdom Clean for exceptional residential and commercial
              cleaning services. We ensure quality, precision, and customer
              satisfaction.
            </p>
          </div>
          <img src="/src/assets/people.png" alt="people" />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5">
        <div className="pt-15">
          <img src="/src/assets/map.png" alt="map" />
          <form className="mt-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                rows={3}
                id="message"
                name="message"
                placeholder="Leave a Message here ....."
                className="resize-none rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-3 rounded-full bg-[#046BD2] px-8 py-2.5 text-sm font-semibold text-white uppercase"
            >
              Contact Us
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-3xl border-2 border-gray-500 px-5 py-4.5">
            <div className="w-[4.25rem] rounded-full bg-[#046BD2] p-[0.875rem]">
              <FaPhoneAlt fill="white" size={40} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-semibold text-black uppercase">
                Contact Number
              </h3>
              <div className="flex flex-col gap-1 text-xs text-[#7D7D7D] capitalize">
                <span>Mobile: +163-654-3569</span>
                <span>Email: info@kleanix.com</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-3xl border-2 border-gray-500 px-5 py-4.5">
            <div className="w-[4.25rem] rounded-full bg-[#046BD2] p-[0.875rem]">
              <TiLocation fill="white" size={40} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-semibold text-black uppercase">
                Our Address
              </h3>
              <div className="flex flex-col gap-1 text-xs text-[#7D7D7D] capitalize">
                <span>Melbourne | Wagga Wagga | Newcastle</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-3xl border-2 border-gray-500 px-5 py-4.5">
            <div className="w-[4.25rem] rounded-full bg-[#046BD2] p-[0.875rem]">
              <BsClockFill fill="white" size={40} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-semibold text-black uppercase">
                Opening Hour
              </h3>
              <div className="flex flex-col gap-1 text-xs text-[#7D7D7D] capitalize">
                <span>Monday - Saturday: 9:00 - 18:00</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ContactPage
