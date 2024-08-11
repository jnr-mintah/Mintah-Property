import "../src/App.css"
import Hero from "./Homepage/Hero/hero"
import Carousel from "./Homepage/Partnership/Carosel/carousel"
import Partners from "./Homepage/Partnership/partner"


function Check() {
  return(
    <>
   <div className="App">
      <Hero/>
    </div> 
       {/* <Partners/> */}
       <Carousel/>
    </>
  )
}

export default Check