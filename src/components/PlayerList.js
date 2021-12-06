import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

import Player from "./player";

// function PlayerList(props) {
//   const preparedPlayerData = preparePlayerData(playerData);
//   const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);
//   const onePlayer = parsedPlayerData[0];
//   return (
//     <section className="PlayerList">
//       <h1>Current participating players</h1>
//       <Player {...onePlayer} />
//     </section>
//   );
// }

function PlayerList(props) {
  const playersData = Object.values(props);
  const parsedPlayers = playersData.map((player) => <Player {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  );
}
export default PlayerList;
