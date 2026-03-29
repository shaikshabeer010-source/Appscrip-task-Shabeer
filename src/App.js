import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filter"
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="main-container">
        <Filters />
        <ProductGrid />
      </div>

      <Footer />
    </>
  );
}

export default App;