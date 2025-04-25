import { useSelector } from "react-redux";
import { GameCard } from "./GameCard";

export const GameList = () => {
  const games = useSelector((state) => state.games);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center items-stretch gap-4 mt-5">
      {games?.map((game) => (
        <GameCard key={game.id} image={game.image} name={game.name} status={game.status} />
      ))}
    </div>
  );
};
