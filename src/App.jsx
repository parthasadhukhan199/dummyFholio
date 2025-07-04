import About from "./componants/About"
import Cards from "./componants/Cards"
import Eyes from "./componants/Eyes"
import Footer from "./componants/Footer"
import Landing from "./componants/Landing"
import Marquee from "./componants/Marquee"
import Navbar from "./componants/Navbar"


import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-zinc-900  text-white ">
      <Navbar/>  
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
        <Cards/>
        <Footer/>
      
    
      
       
       
    </div>
  )
}

export default App