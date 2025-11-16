import { useState } from "react";
import "./App.css";

import Header from "./assets/component/Header/Header";
import Hero from "./assets/component/Hero/Hero";
import NavBar from "./assets/component/PlayerSection/NavBar";
import PlayerCards from "./assets/component/PlayerSection/PlayerCards";
import Footer from "./assets/component/Footer/Footer";
import NewsLetter from "./assets/component/NewsLetter/NewsLetter";
import Selected_players from "./assets/Selected_Players/Selected_players";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [balance, setBalance] = useState(0);
  const [addPlayer, setAddPlayer] = useState(0);
  const [view, setView] = useState("available");

  const addToSelected = (card) => {
    const ids = new Set(selectedPlayers.map((p) => p.id));
    const alreadySelected = ids.has(card.id);

    if (alreadySelected === false) {
      setSelectedPlayers([...selectedPlayers, card]);
    } else {
      alert("Already Added");
    }
  };

  const removeSelected = (id) => {
    setSelectedPlayers((prev) => {
      const player = prev.find((p) => p.id === id);

      if (player) {
        setBalance(balance + (Number(player.price) ));
      }

      return prev.filter((p) => p.id !== id);
    });
  };

  const updateBalance = (price) => {
    const p = Number(price) || 0;
    setBalance((prev) => {
      const newBalance = prev - p;
      if (newBalance < 0) {
        alert("Can't perform this action");
      } else {
        setBalance(newBalance);
      }
    });
  };

  return (
    <>
      <div
        data-theme="light"
        className=" container mx-auto px-4 md:px-8 lg:px-16   "
      >
        <Header balance={balance}></Header>
        <Hero setBalance={setBalance}></Hero>

        <NavBar
          view={view}
          setView={setView}
          selectedPlayers={selectedPlayers}
        ></NavBar>
        {view === "available" && (
          <PlayerCards
            addToSelected={addToSelected}
            selectedPlayers={selectedPlayers}
            updateBalance={updateBalance}
          />
        )}
        {view === "selected" && (
          <Selected_players
            selectedPlayers={selectedPlayers}
            removeSelected={removeSelected}
          />
        )}

        <div className="relative top-15">
          <NewsLetter></NewsLetter>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
