import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = ({ addToSelected, selectedPlayers = [] ,updateBalance }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Players.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div>
      <h1 className="text-black">Player API length: {cards.length}</h1>
      <div className="text-4xl grid grid-cols-3 gap-4 ">
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
