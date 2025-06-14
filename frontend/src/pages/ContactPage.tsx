import Star from "../components/Star"
import { FaPhoneAlt } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import { BsClockFill } from "react-icons/bs"
import Footer from "../components/Footer"
import toast from "react-hot-toast"
import { useForm, SubmitHandler } from "react-hook-form"
import Map from "../components/Map"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY)
    const submitPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json())
    toast.promise(submitPromise, {
      loading: "Sending...",
      success: (data) => {
        if (data.success) {
          reset()
          return "Message sent successfully."
        }
        return "Something went wrong."
      },
      error: "Failed to send message.",
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
              Contact Us
            </h1>
            <p className="text-center text-sm font-medium capitalize lg:text-left lg:text-base">
              Contact Wisdom Clean for exceptional residential and commercial
              cleaning services. We ensure quality, precision, and customer
              satisfaction.
            </p>
          </div>
          <img
            src="/src/assets/people.webp"
            alt="people"
            className="mt-20.25 lg:mt-0 lg:w-139.25"
          />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-15 lg:px-20 lg:pt-15.25">
        <div className="lg:flex lg:gap-8.75">
          <div className="w-full overflow-hidden rounded-lg">
            <Map />
          </div>
          <form
            className="mt-4 flex w-full flex-col gap-2 lg:mt-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_ACCESS_KEY}
            />
            <div className="lg:flex lg:justify-between lg:gap-5.25">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                  {...register("firstName", {
                    required: "First name is required.",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                  {...register("lastName", {
                    required: "Last name is required.",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                rows={3}
                id="message"
                placeholder="Leave a Message here ....."
                className="resize-none rounded-[0.625rem] border border-[#D0D5DD] py-3 pl-3 caret-[#046BD2] outline-none focus:border-[#046BD2]"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-3 cursor-pointer rounded-full bg-[#046BD2] px-8 py-2.5 text-sm font-semibold text-white uppercase"
            >
              Contact Us
            </button>
          </form>
        </div>
        <div className="mt-10 grid gap-4 lg:mt-22.5 lg:grid-cols-3 lg:gap-4.75">
          <div className="flex items-center gap-4 rounded-[2.5rem] border-2 border-gray-500 px-5 py-4.5">
            <div className="w-17 rounded-full bg-[#046BD2] p-3.5">
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
          <div className="flex items-center gap-4 rounded-[2.5rem] border-2 border-gray-500 px-5 py-4.5">
            <div className="w-17 rounded-full bg-[#046BD2] p-3.5">
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
          <div className="flex items-center gap-4 rounded-[2.5rem] border-2 border-gray-500 px-5 py-4.5">
            <div className="w-17 rounded-full bg-[#046BD2] p-3.5">
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
        <div className="mt-15 lg:mt-23">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ContactPage
