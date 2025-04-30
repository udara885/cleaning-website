import { useEffect, useState } from "react"
import ReviewCard from "../components/ReviewCard"
import Footer from "../components/Footer"
import { Link } from "react-router"

const reasons = [
  {
    icon: "expertise.png",
    title: "expertise",
    description:
      "Our skilled professionals bring years of training and experience, ensuring your space is in capable hands and cleaned to perfection.",
  },
  {
    icon: "integrity.png",
    title: "integrity",
    description:
      "Honesty and transparency are at the core of everything we do—trust us to deliver on our promises.",
  },
  {
    icon: "solutions.png",
    title: "customized solutions",
    description:
      "We offer tailored cleaning plans to suit your specific needs, whether for residential, commercial, or specialized cleaning projects.",
  },
  {
    icon: "reliability.png",
    title: "reliability",
    description:
      "Count on us for punctual, dependable cleaning solutions, delivered when you need them most.",
  },
  {
    icon: "quality.png",
    title: "quality assuarance",
    description:
      "We uphold the highest standards to guarantee consistent, top-notch results with every service, big or small.",
  },
  {
    icon: "satisfaction.png",
    title: "customer satisfaction",
    description:
      "We’re committed to exceeding your expectations, leaving your space spotless and refreshed with every service.",
  },
]

const process = [
  {
    icon: "book-form.png",
    title: "Book Online form",
    description:
      "Provide us with your contact details and any specific requirements through our contact page form. We'll ensure we have all the necessary information to deliver the perfect cleaning solution for you.",
  },
  {
    icon: "confirmation.png",
    title: "Get confirmation",
    description:
      "Once you've booked and filled out the form sit back and relax. We'll promptly confirm your booking and send you a confirmation email to let you know that everything is set for your scheduled cleaning service",
  },
  {
    icon: "enjoy.png",
    title: "Let's enjoy",
    description:
      "Now that everything is confirmed, it's time to sit back, relax, and enjoy our top-notch cleaning service Our professional team will arrive promptly at the scheduled time and ensure your home or office is sparkling clean and refreshed",
  },
]

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [currentLogo, setCurrentLogo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const maxLogos = 6
      setCurrentLogo((prev) => (prev === maxLogos - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const maxSlides = 3
      setCurrentSlide((prev) => (prev === maxSlides - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-full text-[#001E3D]">
      <div className="relative h-182 w-full">
        <div className="w-screen">
          <img
            src="/src/assets/hero.png"
            alt="hero image"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="font-poppins relative z-10 flex flex-col items-start gap-1 px-5 pt-51 text-white lg:px-20">
          <div>
            <span className="font-semibold lg:text-xl">WISDOM CLEAN</span>
            <h1 className="text-4xl font-semibold uppercase lg:text-6xl">
              Custom Cleaning <br />
              Solutions <br />
              Exceptional Results
            </h1>
            <p className="text-sm font-medium lg:mt-1 lg:text-base">
              Why settle for standard pricing when your cleaning needs are
              unique?
              <br />
              At Wisdom Clean, we allow you to set your quote, ensuring a
              service <br />
              that fits both your budget and requirements without compromising
              quality.
            </p>
            <Link
              to="/about"
              className="mt-3 rounded-full bg-[#046BD2] px-14 py-3 text-xs font-semibold lg:mt-8 lg:text-sm"
            >
              ABOUT US
            </Link>
          </div>
          <img
            src="/src/assets/cleanergirl.png"
            alt="cleaner girl"
            className="absolute top-36 right-0 hidden h-146 lg:block"
          />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-16 lg:px-20 lg:pt-30">
        <span className="font-semibold uppercase lg:text-xl">
          Why Choose Us
        </span>
        <h2 className="text-xl/9 font-semibold lg:mt-1 lg:text-4xl">
          Choose Excellence, Choose WISDOM CLEAN
        </h2>
        <div className="grid w-full gap-8 pt-6 lg:grid-cols-3 lg:gap-5 lg:pt-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-14 w-16 items-center justify-center rounded-full bg-[#D0D9FF] p-4">
                <img src={`/src/assets/${reason.icon}`} alt={reason.title} />
              </div>
              <div className="w-full">
                <h2 className="text-xl font-semibold uppercase">
                  {reason.title}
                </h2>
                <p className="text-sm capitalize">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 lg:mt-30 lg:-ml-20 lg:flex lg:items-center lg:gap-5.5">
          <img
            className="mx-auto lg:h-193"
            src="/src/assets/cleaner.png"
            alt="cleaner"
          />
          <div>
            <h2 className="pt-4 text-xl font-semibold uppercase lg:text-3xl">
              We deliver top-tier cleaning services tailored just for you!
            </h2>
            <p className="pt-1 text-sm capitalize lg:text-base">
              At Wisdom Clean, we provide professional cleaning solutions
              tailored to your unique needs. Whether you need a fresh, spotless
              home, a well-maintained office, or a pristine commercial space,
              our expert team is here to deliver outstanding results. With a
              commitment to excellence and attention to detail, we ensure every
              space is cleaned to perfection.
            </p>
            <Link to="/gallery">
              <button className="mt-4 mb-8 cursor-pointer rounded-full bg-[#046BD2] px-8 py-2.5 text-xs font-semibold text-white uppercase lg:mt-8 lg:text-sm">
                Our projects
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-30 hidden lg:block">
          <span className="text-xl font-semibold uppercase">Work Process</span>
          <h2 className="text-4xl/9 font-semibold uppercase">
            How we are working!
          </h2>
          <p className="capitalize">
            At Wisdom Clean, we follow a systematic approach to ensure that
            every cleaning project is completed to the highest standards. Here’s
            an overview of our working process:
          </p>
          <div className="mt-13.25 flex justify-between">
            {process.map((item, index) => (
              <div key={index} className="flex">
                <div className={`w-71.25 ${index === 1 ? "pt-10" : ""}`}>
                  <div className="flex flex-col items-center">
                    <div className="flex size-20 items-center justify-center rounded-full bg-[#D0D9FF]">
                      <img
                        src={`/src/assets/${item.icon}`}
                        alt={item.title}
                        className="size-10"
                      />
                    </div>
                    <h2 className="text-xl font-semibold uppercase">
                      {item.title}
                    </h2>
                    <p className="text-center text-sm capitalize">
                      {item.description}
                    </p>
                  </div>
                </div>
                {index !== process.length - 1 && (
                  <img
                    src={`/src/assets/line-2.png`}
                    className={`mt-18 h-17.5 w-43.5 ${index === 0 ? "rotate-18" : ""}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="-mx-5 h-64 bg-[#E6EBFF] lg:-mx-20 lg:mt-30">
          <h2 className="pt-11 text-center text-xl font-medium lg:text-3xl">
            Our Clients
          </h2>
          <div className="overflow-hidden px-4">
            <div
              className="ml-40 flex gap-6 pt-5.5 transition-transform duration-300 ease-in-out lg:ml-153 lg:gap-25"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? `translateX(-${currentLogo * 28}%)`
                    : `translateX(-${currentLogo * 45}%)`,
              }}
            >
              {[
                "nomic.png",
                "futurelife.png",
                "srm.png",
                "sam.png",
                "ruhunu.png",
                "sy.png",
              ].map((img, index) => (
                <img
                  src={`/src/assets/${img}`}
                  key={index}
                  className="size-20 select-none lg:size-25"
                />
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-2 pt-5.5">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentLogo(index)}
                className={`size-2.5 rounded-full bg-[#B5B0B0] transition-colors ${currentLogo === index ? "bg-[#B5B0B0]" : "bg-[#D9D9D9]"} cursor-pointer`}
              />
            ))}
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-31.25 lg:pt-18.5">
          <div>
            <h2 className="pt-17 text-xl font-semibold lg:pt-0 lg:text-[2.5rem]">
              Client's Reviews
            </h2>
            <p className="pt-1 pb-4 text-sm text-[#525252] lg:text-base">
              Our clients trust us to deliver reliable, innovative cleaning
              services that ensure cleanliness, hygiene, and a fresh environment
              across industries worldwide.
            </p>
          </div>
          <div>
            <div className="overflow-hidden p-1 lg:w-122">
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out"
                style={{
                  transform:
                    window.innerWidth >= 1024
                      ? `translateX(-${currentSlide * 105}%)`
                      : `translateX(-${currentSlide * 107}%)`,
                }}
              >
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="min-w-full">
                    <ReviewCard />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2 pt-[1.125rem]">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-[0.625rem] w-[0.625rem] cursor-pointer rounded-full transition-colors ${currentSlide === index ? "bg-[#B5B0B0]" : "bg-[#D9D9D9]"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12.5 lg:pt-43">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default HomePage
