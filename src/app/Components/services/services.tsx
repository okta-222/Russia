import data from "./data";
import ServtUs from "design-system/components/ServicesCard/ServiceCard";
import "./services.scss";

export default function Services() {
  return (
    <main className="serv">
      <div className="container">
        <div className="text-up">
          <h2 className="main-title">Подружитесь закон потом волками</h2>
          <p>Каждый раз когда создается новый закон создается</p>
        </div>

        <div className="info">
          {data.map((property) => (
            <ServtUs key={property.id} property={property} />
          ))}
        </div>
      </div>
    </main>
  );
}
