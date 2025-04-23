import Footer from "../components/Footer"
import Star from "../components/Star"

const services = [
  {
    image: "windowclean.png",
    title: "Window Cleaning",
    description:
      "Let Wisdom Clean bring a sparkling shine to your windows. Our expert team ensures streak-free, crystal-clear results, enhancing the brightness and beauty of your space with every clean.",
  },
  {
    image: "carpetclean.png",
    title: "Carpet Cleaning",
    description:
      "Revitalize your carpets with Wisdom Clean’s professional carpet cleaning services. We deep clean to remove stains, dirt, and allergens, leaving your carpets fresh, soft, and looking like new.",
  },
  {
    image: "officeclean.png",
    title: "Office Cleaning",
    description:
      "Create a productive, clean, and welcoming environment with Wisdom Clean’s office cleaning services. We ensure your workspace is spotless, hygienic, and organized, helping your team stay focused and perform at their best.",
  },
]

const ServicesPage = () => {
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
              Service
            </h1>
            <p className="text-center text-sm font-medium capitalize lg:text-left lg:text-base">
              At Wisdom Clean, we offer top-tier cleaning solutions tailored to
              your needs. From homes to offices and commercial spaces, our
              expert team ensures a spotless, hygienic, and refreshed
              environment every time.
            </p>
          </div>
          <img
            src="/src/assets/people.png"
            alt="people"
            className="mt-10.25 lg:mt-0 lg:w-139.25"
          />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5 pt-22 lg:px-20 lg:pt-15.25">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <div
              className="rounded-[1.25rem] px-6 pt-7 pb-[5.75rem] shadow-[-4px_4px_4px_0_rgba(0,0,0,0.05)]"
              key={index}
            >
              <img src={`/src/assets/${service.image}`} alt={service.title} />
              <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
              <p className="mt-1 text-sm capitalize">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="pt-15 lg:pt-30">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ServicesPage
