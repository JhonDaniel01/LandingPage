import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/clients";
import Works from "./components/Works";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Hero />
      <Clients />
      <Works />
    </div>
  );
}

export default App;
