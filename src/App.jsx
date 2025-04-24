import { Button } from "@/components/ui/button";
import { GameList } from "./components/GameList";

const App = () => {
  return (
    <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h1 className="text-3xl text-bold uppercase">PIXELLOG</h1>
      <Button variant="outline" className="mt-10">
        Добавить игру
      </Button>
      <GameList />
    </section>
  );
};

export default App;
