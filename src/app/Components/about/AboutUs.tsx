import data from "./data";
import "./about.scss";
import AboutUsCard from "design-system/components/AboutusCard/AboutUsCard";
export default function AboutUs() {
  return (
    <main className="section"> 
      <div className="container">
        <div className="text">
          <h2 className="main-title">Elbrus Agency</h2>
          <p>Каждый раз когда создается новый закон</p>
        </div>
        <div className="info">
          {data.map((property) => (
            <AboutUsCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </main>
  );
}
