import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Commission from "./Pages/Commission"
import Layout from "./Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Commission" element={<Commission/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
