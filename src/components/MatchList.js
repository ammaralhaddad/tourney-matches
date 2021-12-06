import Match from "./Match";
import matchData from "../data/matchData";

function MatchList(props) {
  const matchData = Object.values(props);
  const parsedMatches = matchData.map((match) => <Match {...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;
