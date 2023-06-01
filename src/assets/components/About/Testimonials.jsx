import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/p1.jpg"
import img2 from "../../images/p2.jpg"
import img3 from "../../images/p3.jpg"
import "./Testimonial.css";

function Testimonials() {
        return (
          <div className="Testimonial">     
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={img1} />
          <div className="myCarousel">
            <h3>Marcelo Jr.</h3>
            <h4>Football player</h4>
            <p>
            I absolutely love using booking websites for hotels! They provide such convenience and make finding and booking accommodations a breeze.
            </p>
          </div>
        </div>

        <div>
          <img src={img3} />
          <div className="myCarousel">
            <h3>Recardo Kaka</h3>
            <h4>Designer</h4>
            <p>
            I have mixed feelings about booking websites for hotels. 
            </p>
          </div>
        </div>

        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Harry Kane</h3>
            <h4>Model</h4>
            <p>
            I am not a fan of booking websites for hotels. In my experience, the prices advertised on these websites are not always the final prices
            </p>
          </div>
        </div>
      </Carousel></div> 
    );
  }

export default Testimonials;