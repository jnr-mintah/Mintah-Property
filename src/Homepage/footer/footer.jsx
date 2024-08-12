import "../footer/footer.css";
import logo from "../Navbar/property.png";
import facebook from "../footer/facebook-brands-solid.svg";
import linkdin from "../footer/linkedin-brands-solid.svg";
import github from "../footer/github-brands-solid.svg";
import twitter from "../footer/twitter-brands-solid.svg";

function Footer() {
  return (
    <>
      <div className="foot">
        <div className="foot-width">
          <div className="foot-1">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="socials">
              <img src={facebook} alt="" />
              <img src={linkdin} alt="" />
              <img src={github} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>

          <div className="link1">
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/blog">Commercial Properties</a>
              </li>
            </ul>
          </div>

          <div className="link1">
            <ul>
              <li>
                <a href="/resources/mortgage-calculator">Mortgage Calculator</a>
              </li>
              <li>
                <a href="/resources/buying-guide">Property Buying Guide</a>
              </li>
              <li>
                <a href="/resources/selling-guide">Property Selling Guide</a>
              </li>
              <li>
                <a href="/resources/faqs">FAQs</a>
              </li>
              <li>
                <a href="/resources/home-improvement-tips">
                  Home Improvement Tips
                </a>
              </li>
              <li>
                <a href="/resources/local-area-guide">Local Area Guide</a>
              </li>
              <li>
                <a href="/resources/rental-application">
                  Rental Application Form
                </a>
              </li>
            </ul>
          </div>
          <div className="link1">
            <ul>
              <li>
                <a href="/resources/virtual-tours">Virtual Tours</a>
              </li>
              <li>
                <a href="/resources/homebuyers-checklist">
                  Homebuyer’s Checklist
                </a>
              </li>
              <li>
                <a href="/resources/local-events">Local Events Calendar</a>
              </li>
              <li>
                <a href="/resources/eco-friendly-living">
                  Eco-Friendly Living Tips
                </a>
              </li>
              <li>
                <a href="/resources/investment-calculator">
                  Property Investment Calculator
                </a>
              </li>
              <li>
                <a href="/resources/legal-assistance">Legal Assistance</a>
              </li>
              <li>
                <a href="/resources/relocation-services">Relocation Services</a>
              </li>
            </ul>
          </div>
          <div className="link1">
            <ul>
              <li>
                <a href="/resources/home-design-trends">Home Design Trends</a>
              </li>
              <li>
                <a href="/resources/renters-guide">Renters' Guide</a>
              </li>
              <li>
                <a href="/resources/energy-efficiency-tips">
                  Energy Efficiency Tips
                </a>
              </li>
              <li>
                <a href="/resources/real-estate-glossary">
                  Real Estate Glossary
                </a>
              </li>
              <li>
                <a href="/resources/success-stories">Success Stories</a>
              </li>
              <li>
                <a href="/resources/community-involvement">
                  Community Involvement
                </a>
              </li>
              <li>
                <a href="/resources/moving-services-recommendations">
                  Moving Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last">
        <div class="footer-copyright">
        <hr />

          <p>&copy; 2024 Mintah Property. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
