import Dot from "../Dots/dots";
import "../Hero/hero.css";
import Navbar from "../Navbar/nav";

function Hero() {
  return (
    <>
      <header>
        <Navbar />
        <div className="info">
            <div className="text">
                <h1>Find Your Dream Home with Us – Where Luxury Meets Affordability and Discover Comfort</h1>
                <button className="hero-button">Start Your Search</button>
            </div>
        </div>
      </header>
      <Dot/>
    </>
  );
}

export default Hero;
