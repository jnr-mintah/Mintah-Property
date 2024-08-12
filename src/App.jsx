import "../src/App.css"
import Footer from "./Homepage/footer/footer"
import Hero from "./Homepage/Hero/hero"
import Carousel from "./Homepage/Partnership/Carosel/carousel"
import Partners from "./Homepage/Partnership/partner"
import Slider from "./Homepage/Slider/slider"


function Check() {
  return(
    <>
   <div className="App">
      <Hero/>
    </div> 
       <Carousel/>
       {/* <Partners/> */}
       <Slider/>
       <Footer/>
    </>
  )
}

export default Check