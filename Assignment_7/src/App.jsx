import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/component/Header/Header";
import Hero from "./assets/component/Hero/Hero";
import NavBar from "./assets/component/PlayerSection/NavBar";
import PlayerCards from "./assets/component/PlayerSection/PlayerCards";
import Footer from "./assets/component/Footer/Footer";
import NewsLetter from "./assets/component/NewsLetter/NewsLetter";
import Selected_players from "./assets/Selected_Players/Selected_players";
import price from "../public/Players.json";
function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [balance, setBalance] = useState(0);

  const addToSelected = (card) => {
    const newPlayers = [...selectedPlayers, card];
    setSelectedPlayers(newPlayers);
    console.log(card);
  };
  const removeSelected = (id) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const updateBalance = (price) => {
    const newBalance = balance - price;
    if (newBalance < 1) {
      alert("Action not allowed");
    }
    setBalance(newBalance);
  };

  return (
    <>
      <div
        data-theme="light"
        className=" container mx-auto px-4 md:px-8 lg:px-16   "
      >
        <Header balance={balance}></Header>
        <Hero setBalance={setBalance}></Hero>
        <NavBar></NavBar>
        <div className="pb-48">
          <PlayerCards
            addToSelected={addToSelected}
            selectedPlayers={selectedPlayers}
            updateBalance={updateBalance}
          ></PlayerCards>
          <Selected_players
            selectedPlayers={selectedPlayers}
            removeSelected={removeSelected}
          ></Selected_players>
        </div>
        <div className="relative top-15">
          <NewsLetter></NewsLetter>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
