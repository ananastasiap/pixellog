import { GameCard } from "./GameCard";

export const GameList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
      <GameCard />
    </div>
  );
};
