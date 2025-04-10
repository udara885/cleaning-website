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
              Service
            </h1>
            <p className="text-center text-sm font-medium capitalize">
              At Wisdom Clean, we offer top-tier cleaning solutions tailored to
              your needs. From homes to offices and commercial spaces, our
              expert team ensures a spotless, hygienic, and refreshed
              environment every time.
            </p>
          </div>
          <img src="people.png" alt="people" className="" />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5">
        <div className="flex flex-col gap-6 pt-22">
          {services.map((service, index) => (
            <div
              className="rounded-[1.25rem] px-6 pt-7 pb-[5.75rem] shadow-[-4px_4px_4px_0_rgba(0,0,0,0.05)]"
              key={index}
            >
              <img src={service.image} alt={service.title} />
              <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
              <p className="mt-1 text-sm capitalize">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="pt-[3.75rem]">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default ServicesPage
