import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import ReviewCard from "../components/ReviewCard"
import Footer from "../components/Footer"

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

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [currentLogo, setCurrentLogo] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const swipeHandlersSlide = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const handlePrevLogo = () => {
    setCurrentLogo((prev) => (prev === 0 ? 5 : prev - 1))
  }

  const handleNextLogo = () => {
    setCurrentLogo((prev) => (prev === 5 ? 0 : prev + 1))
  }

  const swipeHandlersLogo = useSwipeable({
    onSwipedLeft: handleNextLogo,
    onSwipedRight: handlePrevLogo,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <div className="h-screen w-full text-[#001E3D]">
      <div className="relative h-[728px] w-full">
        <div className="fixed inset-0 z-0 bg-[url(/src/assets/hero.png)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="font-poppins relative z-10 flex flex-col items-start gap-1 px-5 pt-39 text-white">
          <span className="font-semibold">WISDOM CLEAN</span>
          <h1 className="text-4xl font-semibold uppercase">
            Custom Cleaning Solutions Exceptional Results
          </h1>
          <p className="text-sm font-medium">
            Why settle for standard pricing when your cleaning needs are unique?
            <br />
            At Wisdom Clean, we allow you to set your quote, ensuring a service{" "}
            <br />
            that fits both your budget and requirements without compromising
            quality.
          </p>
          <button className="mt-3 rounded-full bg-[#046BD2] px-14 py-3 text-xs font-semibold">
            ABOUT US
          </button>
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-16">
        <span className="font-semibold uppercase">Why Choose Us</span>
        <h2 className="text-xl leading-9 font-semibold">
          Choose Excellence, Choose WISDOM CLEAN
        </h2>
        <div className="flex w-full flex-col gap-8 pt-6">
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
        <img className="mx-auto pt-16" src="/src/assets/cleaner.png" alt="cleaner" />
        <h2 className="pt-4 text-xl font-semibold uppercase">
          We deliver top-tier cleaning services tailored just for you!
        </h2>
        <p className="pt-1 text-sm capitalize">
          At Wisdom Clean, we provide professional cleaning solutions tailored
          to your unique needs. Whether you need a fresh, spotless home, a
          well-maintained office, or a pristine commercial space, our expert
          team is here to deliver outstanding results. With a commitment to
          excellence and attention to detail, we ensure every space is cleaned
          to perfection.
        </p>
        <button className="mt-4 mb-8 rounded-full bg-[#046BD2] px-8 py-2.5 text-xs font-semibold text-white uppercase">
          Our projects
        </button>
        <div className="-mx-5 h-64 bg-[#E6EBFF]">
          <h2 className="pt-11 text-center text-xl font-medium">Our Clients</h2>
          <div className="overflow-hidden px-4">
            <div
              className="flex gap-4 pt-[1.375rem] transition-transform duration-300 ease-in-out"
              {...swipeHandlersLogo}
              style={{ transform: `translateX(-${currentLogo * 10}%)` }}
            >
              {[
                "nomic.png",
                "futurelife.png",
                "srm.png",
                "sam.png",
                "ruhunu.png",
                "sy.png",
              ].map((img, index) => (
                <img src={`/src/assets/${img}`} key={index} className="h-20" />
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-2 pt-[1.375rem]">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentLogo(index)}
                className={`bg-[#B5B0B0]transition-colors h-[0.625rem] w-[0.625rem] rounded-full ${currentLogo === index ? "bg-[#B5B0B0]" : "bg-[#D9D9D9]"}`}
              />
            ))}
          </div>
        </div>
        <h2 className="pt-[4.25rem] text-xl font-semibold">Client's Reviews</h2>
        <p className="pt-1 pb-4 text-sm text-[#525252]">
          Our clients trust us to deliver reliable, innovative cleaning services
          that ensure cleanliness, hygiene, and a fresh environment across
          industries worldwide.
        </p>
        <div className="overflow-hidden p-1">
          <div
            {...swipeHandlersSlide}
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 107}%)` }}
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
              className={`h-[0.625rem] w-[0.625rem] rounded-full transition-colors ${currentSlide === index ? "bg-[#B5B0B0]" : "bg-[#D9D9D9]"}`}
            />
          ))}
        </div>
        <div className="pt-[3.125rem]">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default HomePage
