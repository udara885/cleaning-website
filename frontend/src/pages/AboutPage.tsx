import Footer from "../components/Footer"
import Star from "../components/Star"

const AboutPage = () => {
  return (
    <div className="h-screen w-full text-[#001E3D]">
      <div className="relative h-[728px] w-full">
        <div className="fixed inset-0 z-0 bg-[#046BD2] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="font-poppins relative z-10 flex flex-col items-center gap-1 px-5 pt-[21.4375rem] text-white">
          {[
            "top-40 left-10",
            "top-39 right-25",
            "top-63 left-50",
            "top-128 left-22",
            "top-126 right-14",
            "top-150 left-50",
          ].map((className, index) => (
            <div className={`absolute ${className}`} key={index}>
              <Star />
            </div>
          ))}
          <h1 className="text-4xl leading-9 font-semibold uppercase">
            About Us
          </h1>
          <p className="text-center text-sm font-medium capitalize">
            Enjoy a spotless space with our expert cleaning team. Affordable,
            eco-friendly, and tailored to your needs!
          </p>
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-[2.375rem]">
        <div className="flex flex-col items-center gap-10 rounded-[10.5rem] bg-[#D0D9FF] py-[6.375rem]">
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
        <div className="mt-[2.375rem]">
          <img src="meet.png" alt="meeting" />
          <h3 className="mt-2 font-semibold uppercase">
            Melbourne’s Premier Cleaning Service
          </h3>
          <h2 className="text-xl font-semibold uppercase">Wisdom Clean</h2>
          <p className="mt-1 text-sm capitalize">
            At Wisdom Clean, we provide professional cleaning solutions tailored
            to your unique needs. Whether you need a fresh, spotless home, a
            well-maintained office, or a pristine commercial space, our expert
            team is here to deliver outstanding results. With a commitment to
            excellence and attention to detail, we ensure every space is cleaned
            to perfection.
          </p>
        </div>
        <div className="mt-[3.125rem]">
          <img src="hands.png" alt="hands together" />
          <h2 className="mt-4 text-xl font-semibold uppercase">Our Story</h2>
          <p className="mt-1 text-sm capitalize">
            Wisdom Clean was founded with a clear mission—to redefine industry
            standards through superior quality and reliability. Backed by years
            of expertise and a passion for pristine spaces, we are dedicated to
            delivering exceptional cleaning solutions that go beyond
            expectations, setting a new benchmark for cleanliness in Melbourne
            and beyond.
          </p>
        </div>
        <div className="pt-[3.75rem]">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default AboutPage
