import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/component/Header/Header";
import Hero from "./assets/component/Hero/Hero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header></Header>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
