import { BrowserRouter } from "react-router-dom"
import {Navbar,Hero,Skills, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas,Footer} from './components'
import Education from "./components/Education"

const App=()=> {


  return (
    <BrowserRouter>
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattren bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <Hero/>

      </div>
      <Skills/>
      {/* projects */}
      <Education/>
      {/* <About/> */}
      {/* <Experience/> */}
      {/* <Tech/> */}
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        {/* <StarsCanvas/> */}
        

      </div>
      <Footer/>

    </div>

    </BrowserRouter>
  )
}

export default App
