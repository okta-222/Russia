// import Testimonials from '../../Home/Components/testimonials/testimonials'
// import Progress from '../../Home/Components/progress/progress'

import AboutUs from "../../Components/about/AboutUs";
import Banner from "../../Components/banner/banner";
import Contact from "../../Components/contact/contact";
// import Footer from "../../Components/footer/footer";
import Location from "../../Components/location/location";
import SalesUs from "../../Components/sales/sales";
import Services from "../../Components/services/services";
import Slider from "../../Components/slider/slider";

export default function Home() {
  return (
    <div>
      <AboutUs />
      <Services />
      <Banner />
      <Contact />
      <SalesUs />
      <Location />
      {/* <Footer /> */}
      <Slider />
    </div>
  );
}
