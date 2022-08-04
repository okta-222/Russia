import "./location.scss";
import googlemap from "shared/assets/images/map.png";

export default function Location() {
  return (
    <div>
      <main className="map">
        <div className="container">
          <div className="image">
            <img src={googlemap} alt="img" />
          </div>
          <div className="card">
            <div className="main-txt">
              <h4>
                <span>Elbrus</span>Agency
              </h4>
              <p>Янев любился нояпо</p>
            </div>
            <div className="info">
              <h5>
                <i className="fa-solid fa-location-dot"></i> оябилсп 22
              </h5>
              <h5>
                <i className="fa-solid fa-phone"></i>+22 01090596070
              </h5>
              <h5>
                <i className="fa-solid fa-globe"></i>c6:10 Bc юбился
              </h5>
              <button className="btn">любился нояпо</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
