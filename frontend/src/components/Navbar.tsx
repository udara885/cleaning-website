import {
  Building2,
  House,
  Images,
  LayoutGrid,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router"

const navItems = [
  { icon: <House />, label: "Home", link: "/" },
  { icon: <LayoutGrid />, label: "About Us", link: "/about" },
  { icon: <Building2 />, label: "Services", link: "/services" },
  { icon: <Phone />, label: "Contact Us", link: "/contact" },
  { icon: <Images />, label: "Gallery", link: "/gallery" },
  { icon: <Star />, label: "Review", link: "/reviews" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const location = useLocation().pathname

  return (
    <header className="fixed top-0 left-0 z-50 flex h-22.75 w-screen items-center border-b-2 border-gray-400 backdrop-blur-xs">
      <nav className="flex w-full items-center justify-between px-7">
        <Menu
          size={35}
          className="cursor-pointer text-white md:hidden"
          onClick={() => setOpen(true)}
        />
        <img
          src="/src/assets/logo.png"
          alt="logo"
          className="h-14 cursor-pointer object-cover"
        />
        <div className="hidden gap-13.75 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="font-medium text-white uppercase text-shadow-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className={`hidden cursor-pointer rounded-4xl ${location === "/" ? "bg-[#046BD2] text-white" : "bg-white text-black"} px-7.75 py-2.5 text-sm font-semibold uppercase shadow-2xl lg:block`}
        >
          Get a Quote
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 h-screen w-screen bg-[#046BD2]">
          <button
            className="fixed top-6 right-7 cursor-pointer text-white"
            onClick={() => setOpen(false)}
          >
            <X size={30} />
          </button>
          <div className="font-poppins absolute top-30 flex w-screen flex-col text-xl text-white">
            {navItems.map((item, index) => (
              <Link
                to={item.link}
                className="flex w-full cursor-pointer items-center gap-5 py-5 pl-20 transition focus:bg-black/20"
                key={index}
                onClick={() => setOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
export default Navbar
