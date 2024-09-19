import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/clients";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
