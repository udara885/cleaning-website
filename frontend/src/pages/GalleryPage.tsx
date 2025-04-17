import Footer from "../components/Footer"
import Star from "../components/Star"

const images = [
  "https://images.unsplash.com/photo-1742766246349-16e16c7c80ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1742302954292-1f903368084e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1670967392351-e48436f26ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1663954138537-44fd0b61690d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1742599968125-a790a680a605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742730709645-448101d10586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1743020006662-96d8f64714ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734630630491-458df4f38213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
]

const GalleryPage = () => {
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
              Gallery
            </h1>
            <p className="text-center text-sm font-medium capitalize">
              At Wisdom Clean, we take pride in delivering exceptional cleaning
              services across various sectors. From residential deep cleaning to
              large-scale commercial projects, our work reflects our commitment
              to quality, precision, and customer satisfaction.
            </p>
          </div>
          <img src="/src/assets/people.png" alt="people" />
        </div>
      </div>
      <div className="font-poppins relative z-20 bg-white px-5">
        <div className="flex flex-col gap-4 pt-15">
          {images.map((image, index) => (
            <img src={image} key={index} className="h-[33.625rem]" />
          ))}
        </div>
        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default GalleryPage
