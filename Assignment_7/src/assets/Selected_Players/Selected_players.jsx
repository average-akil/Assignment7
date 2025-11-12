import React from "react";
import SelectedPlayer from './SelectedPlayer';

const Selected_players = ({ selectedPlayers = [], removeSelected }) => {
  return (
    <div className=" flex flex-col ">
      <h1 className="text-lg font-semibold mb-3">
        Selected Players: {selectedPlayers.length}
      </h1>
      <div className="flex flex-col gap-4">
        {selectedPlayers.map((p) => (
          <SelectedPlayer key={p.id} player={p} removeSelected={removeSelected} />
        ))}
      </div>
    </div>
  );
};

export default Selected_players;
