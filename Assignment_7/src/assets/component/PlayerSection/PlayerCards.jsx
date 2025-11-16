import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";
const PlayerCards = ({
  addToSelected,
  selectedPlayers = [],
  updateBalance,
}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Players.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div>
    
      <div className="text-4xl lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-3 flex flex-col justify-center items-center gap-3 ">
        {cards.map((card) => (
          <PlayerCard
            key={card.id}
            card={card}
            addToSelected={addToSelected}
            selectedPlayers={selectedPlayers}
            updateBalance={updateBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;
