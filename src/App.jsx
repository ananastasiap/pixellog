import { GameList } from "./components/GameList";
import { AddGameModal } from "./components/modals/AddGameModal";

const App = () => {
  return (
    <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h1 className="text-3xl text-bold uppercase">PIXELLOG</h1>
      <AddGameModal />
      <GameList />
    </section>
  );
};

export default App;
