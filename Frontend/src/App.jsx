//rafce-react arrow function component export

import Students from "./components/Students"
import {Button} from '@/components/ui/button'
import Count from "./hooks/Count"
import Registry from "./hooks/Registry"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
const App = () => {
  let name="test"
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <div className="pl-96 text-cyan-300 bg-blue-700 ">App</div>
      <Count/>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <h1>This is {name}</h1>

      <Students name="user" age={20} />
      <Registry />
    </> 
  )
}
export default App