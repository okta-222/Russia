import "./sales.scss";
import data from "./data";
import SalesUsCard from "design-system/components/SalesCard/salesCard";

export default function SalesUs() {
  return (
    <main className="sales">
      <div className="container">
        <div className="main-text">
          <h2>Подружитесь колками</h2>
          <p>раз когда создается новый закон создается</p>

          <ul className="main-sales">
            <li>здаетс</li>
            <li>колками</li>
            <li>когда</li>
            <li>ужитес</li>
            <li>итдаете</li>
            <li>тесьгд</li>
          </ul>
        </div>

        <div className="sales-box">
          <div className="container">
            {data.map((property) => (
              <SalesUsCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
