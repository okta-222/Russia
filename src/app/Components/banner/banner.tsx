import "./banner.scss";
import logo from "shared/assets/images/logo1.png";
import logo2 from "shared/assets/images/logo2.png";
import logo3 from "shared/assets/images/logo3.png";
import logo4 from "shared/assets/images/logo4.png";
import logo5 from "shared/assets/images/logo5.png";
import logo6 from "shared/assets/images/logo6.png";
import logo7 from "shared/assets/images/logo7.jpg";
import logo8 from "shared/assets/images/logo8.jpg";

export default function Banner() {
  return (
    <main className="banner">
      <div className="container">
        <div className="txt">
          <h2>
            закон создается закон создается потом волками <br />
            создается новый закон создается{" "}
          </h2>
          <p>созновыйтся новый закон создается</p>
        </div>
        <div className="logos">
          <div className="container">
            <img src={logo} alt="img" />
            <img src={logo2} alt="img" />
            <img src={logo3} alt="img" />
            <img src={logo4} alt="img" />
            <img src={logo5} alt="img" />
            <img src={logo6} alt="img" />
            <img src={logo7} alt="img" />
            <img src={logo8} alt="img" />
          </div>
        </div>
      </div>
    </main>
  );
}
