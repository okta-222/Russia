import Header from "./app/Components/header/header";
import Footer from "./app/Components/footer/footer";
import "./app/scss/main.scss";
import Home from "./app/pages/home/home";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
