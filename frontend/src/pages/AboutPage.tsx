import Footer from "../components/Footer"
import Star from "../components/Star"

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-[#001E3D]">
      <div className="relative h-182 w-full lg:h-115.75">
        <div className="fixed inset-0 z-0 bg-[#046BD2] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="font-poppins relative z-10 flex flex-col items-center gap-1 px-5 pt-85.75 text-white lg:flex-row lg:justify-between lg:gap-11 lg:px-20 lg:pt-31.75">
          {[
            "top-40 left-10 lg:top-34.5 lg:left-16",
            "top-39 right-25 lg:top-80 lg:right-10",
            "top-63 left-50 lg:top-34.5 lg:left-144.5",
            "top-128 left-22 lg:top-94.75 lg:left-101.5",
            "top-126 right-14 lg:top-25 lg:right-8",
            "top-150 left-50 lg:hidden",
          ].map((className, index) => (
            <div className={`absolute ${className}`} key={index}>
              <Star />
            </div>
          ))}
          <div className="flex flex-col items-center gap-1 lg:-mt-10 lg:items-start">
            <h1 className="text-4xl/16 font-semibold whitespace-nowrap uppercase lg:text-6xl">
              About Us
            </h1>
            <p className="text-center text-sm font-medium capitalize lg:text-left lg:text-base">
              Enjoy a spotless space with our expert cleaning team. Affordable,
              eco-friendly, and tailored to your needs!
            </p>
          </div>
          <img
            src="/src/assets/people.png"
            alt="people"
            className="hidden w-139.25 lg:block"
          />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-9.5 lg:px-20 lg:pt-23.25">
        <div className="flex flex-col items-center gap-10 rounded-[10.5rem] bg-[#D0D9FF] py-[6.375rem] lg:flex-row lg:justify-center">
          {[
            { h: "15", s: "+", d: "Years of Experience" },
            { h: "99", s: "%", d: "Satisfied Clients" },
            { h: "98", s: "+", d: "Expert Team Member" },
            { h: "7K", s: "+", d: "Projects Completed" },
          ].map((stat, index) => (
            <div className="flex flex-col items-center" key={index}>
              <h2 className="text-6xl font-semibold">
                {stat.h}
                <span className="text-[#046BD2]">{stat.s}</span>
              </h2>
              <span>{stat.d}</span>
            </div>
          ))}
        </div>
        <div className="mt-9.5 lg:mt-23.25 lg:flex lg:items-center lg:gap-4.25">
          <img
            src="/src/assets/meet.png"
            alt="meeting"
            className="h-auto max-w-full lg:w-148.25"
          />
          <div>
            <h3 className="mt-2 font-semibold uppercase lg:mt-0">
              Melbourne's Premier Cleaning Service
            </h3>
            <h2 className="text-xl font-semibold uppercase lg:text-[2rem]">
              Wisdom Clean
            </h2>
            <p className="mt-1 text-sm capitalize lg:text-base">
              At Wisdom Clean, we provide professional cleaning solutions
              tailored to your unique needs. Whether you need a fresh, spotless
              home, a well-maintained office, or a pristine commercial space,
              our expert team is here to deliver outstanding results. With a
              commitment to excellence and attention to detail, we ensure every
              space is cleaned to perfection.
            </p>
          </div>
        </div>
        <div className="mt-[3.125rem] lg:mt-30 lg:flex lg:flex-row-reverse lg:items-center lg:gap-9">
          <img
            src="/src/assets/hands.png"
            alt="hands together"
            className="h-auto max-w-full lg:w-139.25"
          />
          <div>
            <h2 className="mt-4 text-xl font-semibold uppercase lg:mt-0 lg:text-[2rem]">
              Our Story
            </h2>
            <p className="mt-1 text-sm capitalize lg:text-base">
              Wisdom Clean was founded with a clear mission—to redefine industry
              standards through superior quality and reliability. Backed by
              years of expertise and a passion for pristine spaces, we are
              dedicated to delivering exceptional cleaning solutions that go
              beyond expectations, setting a new benchmark for cleanliness in
              Melbourne and beyond.
            </p>
          </div>
        </div>
        <div className="pt-15 lg:pt-30">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default AboutPage
