import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Work from "./components/Work"
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import { AnimatePresence } from "framer-motion"
import Backgraund from "./components/Backgraund"

function App() {
  
  return (
    <BrowserRouter>
      <main>
        <Sidebar />
          <AnimatePresence mode="wait">
            <Backgraund/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/about" element={<AboutMe/>} />
              <Route path="/contact" element={<ContactMe/>} />
            </Routes>
          </div>
          </AnimatePresence>
      </main>
    </BrowserRouter>
  )
}

export default App
