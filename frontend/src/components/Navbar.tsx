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
import { Link } from "react-router"

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

  return (
    <header className="fixed top-0 left-0 z-50 flex h-[5.6875rem] w-full items-center border-b-2 border-gray-400 backdrop-blur-xs">
      <nav className="flex w-full items-center justify-between px-7">
        <Menu
          size={35}
          className="cursor-pointer text-white"
          onClick={() => setOpen(true)}
        />
        <img
          src="/src/assets/logo.png"
          alt="logo"
          className="h-14 cursor-pointer object-cover"
        />
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
