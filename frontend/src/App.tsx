import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"
import ReviewPage from "./pages/ReviewPage"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </>
  )
}
export default App
